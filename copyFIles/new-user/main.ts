import { Component, OnInit, AfterViewInit, ViewEncapsulation, OnDestroy, OnChanges, isDevMode, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AccountService } from 'app/core/auth/account.service';
import { AuthServerProvider } from 'app/core/auth/auth-session.service';
import { CookieService } from 'ngx-cookie-service';
import { SlideUp } from '../animations/slideUpAnimation';
import { OpenRight } from '../animations/openRightAnimation';
import { FetchData } from '../shared/service/fetch-data';
// import { firstEntry } from '../shared/mocked-data/json-data';
import { LocalStorageService } from 'ngx-webstorage';
import { MatomoTracker } from 'ngx-matomo';
import { MatomoInjector } from 'ngx-matomo';
import { UserDetailsService } from '../shared/service/user-details.service';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../shared/service/breadcrumb.service';
import { DataService } from '../shared/service/data.service';
import { RefreshTokenService } from '../shared/service/refresh-token.service';
import { BannerService } from './shared-component/trials/banner.service';
import { MatDialog } from '@angular/material/dialog';
import { TrialModalComponent } from './shared-component/trials/trial-modal/trial-modal.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TrialData } from '../shared/models/trialData.model';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

  animations: [SlideUp, OpenRight]
  // animations: [botBodyExpandAnimation, SlideAnimation]
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  isDashboard: any = false;
  firstIn = false;
  active: any;
  finishOnboarding = false;
  nameFromDash: any;
  botSearchForm = new FormGroup({
    searchController: new FormControl('')
  });

  topbarHide = true;
  pagination: any;
  bookmark = '../../../content/images/bookmark50.svg';
  dial = '../../../content/images/dial50.svg';
  box = '../../../content/images/box50.svg';
  grid = '../../../content/images/grid50.svg';
  globe = '../../../content/images/globe50.svg';
  initials = '';
  account: any = null;
  authToken: any;
  identity: any;
  firstName: string;
  lastName: string;
  profile: any = null;
  profileSubscription: Subscription;
  public routeChangeTrue = false; // could be a shared var access
  title: any;
  company: any;
  freeTrialDaysLeft: any;
  sub: any = new Subscription();
  subscriptionStatus: Subscription;
  // subscriptionExpired: any;
  bannerHider: boolean;
  showFootnote: boolean;
  modalStatus: boolean;
  isTrialRes: any;
  trialInfoLoaded = false;

  isDemo: boolean;
  demoBannerOpen: boolean;
  wasBotClicked;
  // url: string = 'https://chat.staging.onereach.ai/GapF3hg0QZ-V3pVTbzuZQA/0yb4400'; // ab v1
  // url: string = 'https://chat.staging.onereach.ai/GapF3hg0QZ-V3pVTbzuZQA/0yb4400';
  url: string = 'https://chat.staging.onereach.ai/GapF3hg0QZ-V3pVTbzuZQA/0yb4400'; // abi v2
  urlSafe: SafeResourceUrl;
  scrollbar = false;

  subscriptionExpired = false;

  constructor(
    private cookieService: CookieService,
    private dataService: DataService,
    private localStorageService: LocalStorageService,
    private authSession: AuthServerProvider,
    private fetchData: FetchData,
    public router: Router,
    private accountService: AccountService,
    private matomoTracker: MatomoTracker,
    private matomoInjector: MatomoInjector,
    private userDetailsService: UserDetailsService,
    private breadcrumbService: BreadcrumbService,
    private refreshTokenService: RefreshTokenService,
    private bannerService: BannerService,
    public dialog: MatDialog,
    public sanitizer: DomSanitizer
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  hiMainBotIsClicked($event) {
    console.log('Hi Main bot is clicked: ' + $event);
    this.wasBotClicked = $event;
  }

  // get isModalClosed() {
  //   this.bannerService._isModalClosed.subscribe(bool => {
  //     // console.log('this is _isModalClosed after closed() in homebody >>>>  ', bool);
  //     this.modalStatus = bool;
  //   });
  //   // this.dataService.isDemoMode.subscribe(res => {
  //   //   // banner hider is using isTrial api
  //   //   this.modalStatus = res;
  //   // });

  //   return this.modalStatus;
  // }

  ngOnDestroy() {
    // alert("testing destroy")
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
    this.sub.unsubscribe();
    this.subscriptionStatus.unsubscribe();
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const title = route.data['title'];

    return true;
  }

  makeInitials(firstName, lastName) {
    this.initials = '';
    if (!firstName && !lastName) {
      return this.initials;
    }
    if (firstName) {
      this.initials += firstName[0];
    }
    if (lastName) {
      this.initials += lastName[0];
    }
  }

  checkDemoAndBanner() {
    // alert('rear');
    if (this.isDemo) {
      this.dialogOpen('');
    }
  }

  ngOnInit(): void {
    this.active = 'overview';
    this.getRoute();

    let demoData;
    if (demoData == null) {
      this.scrollbar = true;
    }
    if (this.localStorageService.retrieve('demoCache')) {
      demoData = this.localStorageService.retrieve('demoCache');
      this.trialInfoLoaded = true;
      // alert('here')
      console.log(demoData);
      this.dataService.setDemoData(demoData);
      this.initializeDialogSubscription();
    } else {
      if (!this.dataService.trialInfoFetched) {
        this.fetchData.isTrial().subscribe(
          istrial => {
            this.trialInfoLoaded = true;
            this.dataService.trialInfoFetched = true;

            if (istrial) {
              console.log(istrial);
              demoData = new TrialData();
              if (istrial.impersonateStatus) {
                // if trial user, set demo mode true
                demoData.demo = istrial.impersonateStatus;
                demoData.isSupplierImpersonateData = istrial.impersonateSupplier;
                demoData.isCategoryImpersonateData = istrial.impersonateCategory;
                demoData.demoModal = istrial.impersonateStatus;
                // this.dataService.setDemoData(demoData);
                this.dataService.showScrollBar(false);
                this.initializeDialogSubscription();
              } else {
                // this.dataService.setDemoData(demoData);
                this.dataService.showScrollBar(true);
                // alert("here")
                this.dataService.get_scrollBarToggler.subscribe(res => {
                  console.log(res);
                  this.scrollbar = res;
                });
              }

              this.dataService.setDemoData(demoData);
            }
          },
          err => {
            this.dataService.trialInfoFetched = true;
            console.log(err);
          }
        );
      }
    }

    window['myToken'] = this.localStorageService.retrieve('accessToken');
    console.log(window['myToken']);
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url + '?token=' + encodeURIComponent(this.localStorageService.retrieve('accessToken'))
    );
    // console.log(this.urlSafe);
    this.sub.add(
      this.breadcrumbService.breadcrumbs.subscribe(p => {
        this.pagination = p;
      })
    );
    this.profileSubscription = this.userDetailsService.$profile.subscribe(p => {
      this.profile = p;
      if (p) {
        if (p.firstName) {
          this.firstName = p.firstName;
          this.makeInitials(p.firstName, p.lastName);
        }
        if (p.lastName) {
          this.lastName = p.lastName;
        }
        if (p.jobTitle && p.jobTitle.name) {
          this.title = p.jobTitle.name;
        }
        if (p.company && p.company.name) {
          this.company = p.company.name;
        }
      }
    });
    this.localStorageService.store('onboardingComplete', false);
    const onboardingComplete = this.localStorageService.retrieve('onboardingComplete');
    this.firstIn = !onboardingComplete;

    /* this.accountService.accountCache$.subscribe(res => {
      this.firstName = res.firstName;
    }); */
    this.getSubscriptionStatus();
    this.hideTopBarEveryThreeSeconds();
    this.getFreePlanStatus();
  }

  initializeDialogSubscription() {
    this.sub.add(
      this.dataService.demoModeBehaviorSubject$.subscribe(demo => {
        console.log(demo);
        this.isDemo = demo.demo;
        this.demoBannerOpen = demo.demoModal;
        if (this.demoBannerOpen == true && this.isDemo) {
          this.dialogOpen('');
        } else if (this.demoBannerOpen) {
          console.log('modal has been closed already, dont open it again!');
        }
      }),

      this.dataService.get_scrollBarToggler.subscribe(val => {
        this.scrollbar = val;
        // if(val && this.isDemo) {
        //   this.dialogOpen('')
        // }
      })
    );
  }

  goToSupport() {
    console.log('support route');
  }

  // checkRemainingAvailableSupplier() {
  //   this.fetchData.userSupplierCount().subscribe(res => {
  //     console.log(res);
  //     this.dataService.setSupplierCount(res);

  //     // if (res && res.supplierRemained <= 0) {
  //     //   this.maxReached = true;
  //     // } else {
  //     //   this.maxReached = false;
  //     // }
  //   });
  // }

  dialogOpen(route): any {
    // console.log(route);
    const dialogRef = this.dialog.open(TrialModalComponent, {
      // width: '80%',
      panelClass: 'trial-modalbox',
      data: {
        datakey: route
      }
    });
    dialogRef.afterClosed().subscribe(
      r => {
        // this.dataService.toggleBanner(false);
        // alert("im here")
        let demoData = this.dataService.getDemoData();
        demoData.demoModal = false;
        this.dataService.setDemoData(demoData);
        this.dataService.showScrollBar(true);
        // this.dataService.toggleBanner(false)
      },
      c => {
        // this.dataService.toggleBanner(false);
      }
    );
  }

  getFreePlanStatus() {
    this.fetchData.getFreePlanStatus().subscribe(data => {
      this.freeTrialDaysLeft = data.remainingDays;
    });
  }

  getSubscriptionStatus() {
    this.subscriptionStatus = this.userDetailsService.getSubscription().subscribe(res => {
      this.userDetailsService.setSubscription(res);
      if (res.userSubscriptionStatus && res.userSubscriptionStatus == 'Expired') {
        this.subscriptionExpired = true;
      }
    });
  }

  activateSubscription() {
    this.userDetailsService.setSubscription({});
    this.router.navigate(['/subscription']);
  }

  navigate(link) {
    if (link) {
      this.router.navigate([link]);
    }
  }
  firstEntryToApp($event) {
    this.finishOnboarding = $event;

    if (!this.finishOnboarding) {
      this.firstIn = true;
    } else if (this.finishOnboarding) {
      this.firstIn = false;
    }
  }

  hideTopBarEveryThreeSeconds() {
    if (this.topbarHide === true) {
      setTimeout(() => {
        this.topbarHide = false;
      }, 10000);
    } else if (this.topbarHide === false) {
      setTimeout(() => {
        this.topbarHide = true;
      }, 10000);
    }
  }
  // hover on div, pull top bar backdown
  setTobarHideToFalse() {
    this.topbarHide = true;
    this.hideTopBarEveryThreeSeconds();
  }

  ngAfterViewInit() {
    // this.active = 'overview';
    // this.getRoute();
    // let demoData;
    // if (this.localStorageService.retrieve('demoCache')) {
    //   demoData = this.localStorageService.retrieve('demoCache');
    //   this.trialInfoLoaded = true;
    //   alert('here')
    //   console.log(demoData)
    //   this.dataService.setDemoData(demoData);
    //   this.initializeDialogSubscription();
    // } else {
    //   if (!this.dataService.trialInfoFetched) {
    //     this.fetchData.isTrial().subscribe(
    //       istrial => {
    //         this.trialInfoLoaded = true;
    //         this.dataService.trialInfoFetched = true;
    //         if (istrial) {
    //           console.log(istrial);
    //           demoData = new TrialData();
    //           if (istrial.impersonateStatus) {
    //             // if trial user, set demo mode true
    //             demoData.demo = istrial.impersonateStatus;
    //             demoData.isSupplierImpersonateData = istrial.impersonateSupplier;
    //             demoData.isCategoryImpersonateData = istrial.impersonateCategory;
    //             demoData.demoModal = istrial.impersonateStatus;
    //             this.dataService.setDemoData(demoData);
    //             this.dataService.showScrollBar(false);
    //             this.initializeDialogSubscription();
    //           } else {
    //             // this.dataService.setDemoData(demoData);
    //             this.dataService.showScrollBar(true)
    //             // alert("here")
    //             this.dataService.get_scrollBarToggler.subscribe(res=> {
    //               console.log(res)
    //               this.scrollbar = res;
    //             })
    //           }
    //         } else {
    //           alert("not trial")
    //         }
    //       },
    //       err => {
    //         this.dataService.trialInfoFetched = true;
    //         console.log(err);
    //       }
    //     );
    //   }
    // }
  }

  getRoute(): any {
    if (this.router.url.includes('')) {
      this.isDashboard = true;
    } else {
      this.isDashboard = false;
    }
  }

  viewOverview(tab): any {
    if (tab === 'overview') {
      this.router.navigate(['/overview']);
      this.changeTabColor(tab);
    }
  }

  viewCategoryPage(tab): any {
    if (tab === 'category') {
      this.router.navigate(['/category']);
      this.changeTabColor(tab);
    }
  }

  viewSupplierPage(tab): any {
    if (tab === 'supplier') {
      this.router.navigate(['/suppliers']);
      this.changeTabColor(tab);
    }
  }

  viewFaqPage(tab): any {
    if (tab === 'faqs') {
      this.router.navigate(['/faqs']);
      this.changeTabColor(tab);
    }
  }

  changeTabColor(val) {
    this.active = val;
  }
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', {
        skipLocationChange: true
      })
      .then(() => this.router.navigate([uri]));
  }
  logout(): any {
    const haveRefToken = this.localStorageService.retrieve('refreshToken');

    if (!haveRefToken) {
      this.fetchData.logoutKC().subscribe(res => {
        this.localStorageService.clear('refreshToken');
        this.localStorageService.clear('accessToken');
        this.localStorageService.clear('tExpiry');
        this.refreshTokenService.clearTimer();

        this.redirectTo('onboarding');
      });
    } else {
      let refreshToken = this.localStorageService.retrieve('refreshToken');
      this.fetchData
        .logoutSM({
          refreshToken: refreshToken
        })
        .subscribe(
          res => {
            if (this.localStorageService.retrieve('accessToken')) {
              this.localStorageService.clear('accessToken');
            }
            this.refreshTokenService.clearTimer();

            //this.accountService.accountCache$ = null;
            this.accountService.identity(true).subscribe(
              r => {
                if (!r) {
                  this.router.navigateByUrl('/signin');
                }
              },
              e => {
                this.router.navigateByUrl('/signin');
              }
            );
          },
          err => {}
        );
    }
  }

  getUserIdentity($event): any {
    this.identity = $event;
  }

  goToAccount(tabId): any {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        tabIndex: JSON.stringify(tabId)
      }
    };
    this.router.navigate([`/account`], navigationExtras);
  }
}
