let luis_resource = {
  "query": "how much is water",
  "prediction": {
    "topIntent": "skillPriceCost",
    "intents": {
      "skillPriceCost": {
        "score": 0.9999925
      },
      "skillSupplierRisk": {
        "score": 0.008636876
      },
      "testIntent": {
        "score": 0.0057064597
      },
      "skillSupplierLookUp": {
        "score": 0.000010666553
      },
      "None": {
        "score": 0.0000026262558
      }
    },
    "entities": {
      "PriceKeyWordEntity": [
        "how much is"
      ],
      "KeyNameEntity": [
        "water"
      ],
      "$instance": {
        "PriceKeyWordEntity": [
          {
            "type": "PriceKeyWordEntity",
            "text": "how much is",
            "startIndex": 0,
            "length": 11,
            "score": 0.99569404,
            "modelTypeId": 1,
            "modelType": "Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ],
        "KeyNameEntity": [
          {
            "type": "KeyNameEntity",
            "text": "water",
            "startIndex": 12,
            "length": 5,
            "modelTypeId": 7,
            "modelType": "Pattern.Any Entity Extractor",
            "recognitionSources": [
              "model"
            ]
          }
        ]
      }
    },
    "sentiment": {
      "label": "positive",
      "score": 0.8712026
    }
  }
};

let categories = [
  {
      "canonicalForm": "3D Printing Services",
      "uuid": "756acd43-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "3PL Services",
      "uuid": "756acb3b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "4PL Services",
      "uuid": "756ad039-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "ABS",
      "uuid": "756ac945-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "API Povidone Iodine",
      "uuid": "8bf11900-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "ATM Services",
      "uuid": "756accb8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Academic Research",
      "uuid": "756ad0b2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ace-K",
      "uuid": "756ad2e4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Acetic Acid",
      "uuid": "756ac957-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Acetone",
      "uuid": "756ac95d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Acrylic Acid",
      "uuid": "756acbb7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Activated Carbon",
      "uuid": "756ad225-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Active Components",
      "uuid": "756ad0ee-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Advertisement Production",
      "uuid": "756ad266-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aerosol Cans",
      "uuid": "756ac9c4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Air Freight Services",
      "uuid": "756acb2f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Almonds",
      "uuid": "756acbf3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aluminum",
      "uuid": "756ac8f0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aluminum Collapsible Tubes",
      "uuid": "756acc23-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aluminum Foils",
      "uuid": "756acdc6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ammonia",
      "uuid": "756ac963-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Analytical Testing Services",
      "uuid": "756ad06a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Anti-Money Laundering Software",
      "uuid": "756ac9fd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Antibody Vaccines",
      "uuid": "756ad0a6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Apples",
      "uuid": "756acdef-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Artificial Intelligence",
      "uuid": "756ad41d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aspartame",
      "uuid": "756ad2ea-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Aspirin",
      "uuid": "756acb0b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "BA/BE Studies",
      "uuid": "756ad051-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Barley",
      "uuid": "756aca3b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Base Oil - Group II",
      "uuid": "756ac951-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Batteries",
      "uuid": "756acc64-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Bearings",
      "uuid": "756acd01-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Beef",
      "uuid": "756aca87-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Benzene",
      "uuid": "756ac969-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Beverage Cans",
      "uuid": "756ac9be-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Big Data Solutions",
      "uuid": "756ad43b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Biomarkers",
      "uuid": "756ad291-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Blister Packaging",
      "uuid": "756acd61-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Bulk Drums",
      "uuid": "756acd66-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Business Intelligence",
      "uuid": "756ad3da-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Butter",
      "uuid": "756aca81-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "CMO Formulation",
      "uuid": "756ad118-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cable Harnesses",
      "uuid": "756ad1a9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cables",
      "uuid": "756acad4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Calcium Carbonate (CaCo3)",
      "uuid": "756acb79-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Calcium Chloride (CaCl2)",
      "uuid": "756acb8c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Calcium Phosphate (CA3(PO4)2",
      "uuid": "756acb92-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Caps and Closures",
      "uuid": "756acc11-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Car Rentals",
      "uuid": "756ad242-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Carbon Black",
      "uuid": "756acacf-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Carbon Steel",
      "uuid": "756acc34-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Carrageenan",
      "uuid": "756ad2de-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Carton Boards",
      "uuid": "756acdd4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cash-In-Transit Services",
      "uuid": "756accbe-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cashew Nuts",
      "uuid": "756acbfe-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Castor Oil",
      "uuid": "756ad33f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Catering Services",
      "uuid": "756accb1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Caustic Soda",
      "uuid": "756acabd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cedar Wood Oil",
      "uuid": "756ad1f5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cell Culture Media",
      "uuid": "756ad130-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cellulose Ethers and Its Derivatives",
      "uuid": "756ad136-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cementing Chemicals",
      "uuid": "756ad160-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cheese",
      "uuid": "756aca7c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cheque Processing Services",
      "uuid": "756acb29-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Chromatography Resins",
      "uuid": "8bf118fc-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Citric Acid",
      "uuid": "756ad337-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cleaning Services",
      "uuid": "756acce9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clinical IT Services",
      "uuid": "756ad03f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clinical Logistics",
      "uuid": "756ad089-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clinical Staffing Services",
      "uuid": "756ad057-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clinical Trials",
      "uuid": "756ad09a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clinical Wearables",
      "uuid": "756ad076-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Clove Oil",
      "uuid": "756acddb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cocoa",
      "uuid": "756aca46-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Coconut Oil",
      "uuid": "756ad346-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Cold Chain Logistics",
      "uuid": "756acb4a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Commercial Print Services",
      "uuid": "756acc90-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Commercial Real Estate Services",
      "uuid": "756accef-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Commissioning Services",
      "uuid": "756ad38d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Comparator Drugs",
      "uuid": "8bf118f0-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Completion Chemicals",
      "uuid": "756ad441-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Connectors",
      "uuid": "756acada-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Consumer Healthcare Services",
      "uuid": "756ad070-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Contact Centers",
      "uuid": "756acc97-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Contract Mining Services",
      "uuid": "756ad154-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Contract Sales Organization",
      "uuid": "756acc9d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Copper and Copper Semis",
      "uuid": "756ac8e8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Core Labs",
      "uuid": "756ad29d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Corn",
      "uuid": "756aca5e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Corporate Cards",
      "uuid": "756acb23-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Corporate Health And Wellness Management",
      "uuid": "756ad0be-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Corporate Tax Services",
      "uuid": "756ad254-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Corrugated Boards",
      "uuid": "756ac99f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Courier, Express and Parcel Services",
      "uuid": "756acb51-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Creative Advertising",
      "uuid": "756ac905-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Credit Bureau Services",
      "uuid": "756ac9f6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Crude Oil",
      "uuid": "756ac8e1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Customer Relationship Management (CRM)",
      "uuid": "756ad3ec-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "DIN Rail Terminal Blocks",
      "uuid": "756acae0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "DNA Sequencing",
      "uuid": "756ad0a0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "DNA Vaccines",
      "uuid": "756ad0ac-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Data Center Hosting Services",
      "uuid": "756ad411-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Database Management System (DBMS)",
      "uuid": "756ad3f2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Debt Collection Services",
      "uuid": "756acff5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Debt Collection Software",
      "uuid": "756acffb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Debt Sales",
      "uuid": "756ad002-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Deep Freezers",
      "uuid": "756ad2b5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Dibasic Calcium Phosphate",
      "uuid": "756acb99-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Diesel",
      "uuid": "756ad3ab-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Digital Marketing Services",
      "uuid": "756aca04-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Digital Payment Services",
      "uuid": "756ad020-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Dimethicone",
      "uuid": "756ac96f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Direct Mail Services",
      "uuid": "756ad26c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Directional Drilling Services",
      "uuid": "756ad166-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Discovery Services",
      "uuid": "756ad08e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Disposable Gloves",
      "uuid": "756acc75-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Drilling Chemicals",
      "uuid": "756ad172-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Drilling Equipment and Consumables",
      "uuid": "756acc40-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "ERP Software",
      "uuid": "756ad3d4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Eggs",
      "uuid": "756ad22b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Electrical Design & Engineering Services",
      "uuid": "756ad399-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Electricity",
      "uuid": "756ad3b1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Electronic Manufacturing Services",
      "uuid": "756ad1af-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Employee Relocation Management",
      "uuid": "756ad0c4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Empty Capsules",
      "uuid": "756ad13c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Emulsifiers",
      "uuid": "756ad219-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Energy As A Service (Eaas)",
      "uuid": "756ad25a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Engineering And Design Services",
      "uuid": "756ad393-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Enterprise Routers And Switches",
      "uuid": "756ad3ff-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Epoxy resins",
      "uuid": "756ac975-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ethanolamine",
      "uuid": "756ac981-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ethyl Acetate",
      "uuid": "756ac97b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ethylene Glycol MEG",
      "uuid": "756ac987-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Explosive Accessories",
      "uuid": "756ad273-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Explosives",
      "uuid": "756ad106-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "External Audit Services",
      "uuid": "756ad237-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Face Masks",
      "uuid": "756acc7b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fasteners",
      "uuid": "756acaf3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Finance Accounting And Outsourcing",
      "uuid": "756ad027-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fixed Line Services",
      "uuid": "756ad417-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fleet Management",
      "uuid": "756ad23c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Flexible Intermediate Bulk Containers (FIBC)",
      "uuid": "756acd79-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Floating Production Storage And Offloading (FPS & FPSO)",
      "uuid": "756ad16c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Flooring Services",
      "uuid": "756ad363-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Flow Chambers",
      "uuid": "756ad2c7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fluff Pulp",
      "uuid": "756acd8b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Forgings",
      "uuid": "756ac9e9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fracking Proppants",
      "uuid": "756ad375-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fraud Prevention Systems",
      "uuid": "756ad429-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Fuel Oil",
      "uuid": "756ad260-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Gearboxes and Crushers",
      "uuid": "756ad34c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Gelatin",
      "uuid": "756acaf9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Gene Therapy Trials",
      "uuid": "756ad07c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "General/ Civil Construction Services",
      "uuid": "756aca35-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Glass Bottles",
      "uuid": "756ac8da-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Glycerin",
      "uuid": "756ad231-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Glycol Ethers",
      "uuid": "756ac98d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Grinding Media",
      "uuid": "756ad100-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Guar Gum",
      "uuid": "756aca4c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Gum Turpentine",
      "uuid": "756ad1de-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "HDPE",
      "uuid": "756ac926-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "HEOR Services",
      "uuid": "756ad064-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "HVAC Maintenance Services",
      "uuid": "756accf5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hazardous/Solid Waste Management",
      "uuid": "756acccb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Heavy Mining Equipment",
      "uuid": "756acc58-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "High-Fructose Corn Syrup",
      "uuid": "756ad213-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hops & Adjuncts",
      "uuid": "756ad21f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hotels",
      "uuid": "756ac913-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hydraulic And Pneumatic Components",
      "uuid": "756acd07-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hydraulic Fracturing Services",
      "uuid": "756ad381-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hydrogen Peroxide",
      "uuid": "756acb9f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hydroxychloroquine",
      "uuid": "756acb11-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Hydroxypropyl Methylcellulose",
      "uuid": "756acba5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "IT Managed Security Services",
      "uuid": "756ad423-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "IT Services Outsourcing",
      "uuid": "756ad3f8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ibuprofen",
      "uuid": "756acb17-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "In-Vitro Toxicology",
      "uuid": "756ad094-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "In-Vivo Toxicology Testing",
      "uuid": "756ad2a9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Industrial Ethanol",
      "uuid": "756acb57-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Industrial Gases",
      "uuid": "756ad124-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Industrial Motors",
      "uuid": "756acc5e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Industrial Pumps",
      "uuid": "756acd4f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Industrial Valves",
      "uuid": "756acd12-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Injectors",
      "uuid": "756ad142-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Insurance Services",
      "uuid": "756ad014-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Integrated Facilities Management",
      "uuid": "756accfb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Investment Management",
      "uuid": "756ad00e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Iron Castings",
      "uuid": "756ac8f7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Iron Ore",
      "uuid": "756ad285-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Isopropanol",
      "uuid": "756ac993-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Jerry Cans",
      "uuid": "756acdb4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "LAB",
      "uuid": "756acbc3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "LDPE",
      "uuid": "756ac92c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "LLDPE",
      "uuid": "756ac932-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lab Centrifuges",
      "uuid": "756ad2c1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lab Chemicals",
      "uuid": "756ad2bb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lab Glassware",
      "uuid": "756ad2cc-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lab Supplies",
      "uuid": "756ad2d2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Labels",
      "uuid": "756acd55-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lactic Acid",
      "uuid": "756ad1e9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Laminate Collapsible Tubes",
      "uuid": "756acc28-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lard",
      "uuid": "756aca8d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Laundry Services",
      "uuid": "8bf11905-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Leaflets",
      "uuid": "756acd91-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Learning & Development",
      "uuid": "756ad0ca-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Legal Services",
      "uuid": "756ad24e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lighting Services",
      "uuid": "756ad357-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lime",
      "uuid": "756ad27f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Liquid Chromatography",
      "uuid": "756ad2af-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lockbox Services",
      "uuid": "756ad033-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lotion Pumps",
      "uuid": "756acda3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Loyalty Programs",
      "uuid": "756ad3c3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Lubricants And Greases",
      "uuid": "756ad12a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Machining",
      "uuid": "756ac9f0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Magnesium Chloride (MgCl2)",
      "uuid": "756acbab-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Maintenance Repair & Overhaul (MRO)",
      "uuid": "756acd19-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Maintenance Services",
      "uuid": "756acd1f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Management Consulting",
      "uuid": "756ac91a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mannequins",
      "uuid": "756aca22-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mannitol",
      "uuid": "756ad1d2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Marketing Fulfilment Services",
      "uuid": "756ad3bd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Material Handling Equipment (MHE)",
      "uuid": "756acc46-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mechanical, Electrical And Plumbing Services",
      "uuid": "756ad387-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Media Monitoring Services",
      "uuid": "8bf118de-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Media Planning And Buying",
      "uuid": "756ad11e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Medical Agencies",
      "uuid": "756ad2a3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Medical Coveralls",
      "uuid": "756ad351-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Medical Writing Services",
      "uuid": "756ad297-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Meetings & Events",
      "uuid": "756ad248-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mentha Oil",
      "uuid": "756aca52-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Menthol",
      "uuid": "756aca58-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Metal Drums",
      "uuid": "756acdaf-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Metal Stamping and Fabrication",
      "uuid": "756ad1e3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Methanol",
      "uuid": "756acb5e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Methyl Ester Sulfonate",
      "uuid": "756ac999-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Methyl Isobutyl Ketone",
      "uuid": "756acbc9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Milk Powders",
      "uuid": "756ad1fb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mining Exploration Services",
      "uuid": "756ad15a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mining Support Equipment",
      "uuid": "756ad279-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Mobile Device Management",
      "uuid": "8bf118d4-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Mobility - Voice And Data",
      "uuid": "756ad40b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Molybdenum",
      "uuid": "756ac9d6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Natural Gas",
      "uuid": "756ad3b7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Natural Rubber",
      "uuid": "756ac8b5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Natural Vitamins",
      "uuid": "8bf118e8-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Nickel",
      "uuid": "756ac9d0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Non-Woven",
      "uuid": "756acbcf-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Nylon",
      "uuid": "756ac94b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ocean Freight Services",
      "uuid": "756aca28-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Off The Road Tires",
      "uuid": "756ad0fa-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Office Furniture",
      "uuid": "756accdd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Office Supplies",
      "uuid": "756accd7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Offshore Aviation Logistics",
      "uuid": "756ad369-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Offshore Labor",
      "uuid": "756ad17e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Oil And Gas Surface Rental Equipment",
      "uuid": "756ad44c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Oil Country Tubular Goods (OCTG)",
      "uuid": "756ad36f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Oleochemicals",
      "uuid": "756acde2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Onions",
      "uuid": "756ad190-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Onshore Drilling Rigs",
      "uuid": "756ad37b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Orange Oil",
      "uuid": "756acc05-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Oranges",
      "uuid": "756acde8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Outplacement Services",
      "uuid": "756ad0e2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "PE Films",
      "uuid": "756ac9a5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "PET",
      "uuid": "756ac939-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "POS Lending Platforms",
      "uuid": "756ad01a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "PVC",
      "uuid": "756aca99-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "PVOH",
      "uuid": "756aca9f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Palm Kernel Oil",
      "uuid": "756aca76-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Palm Oil",
      "uuid": "756aca40-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Paper",
      "uuid": "756acdcd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Paracetamol",
      "uuid": "756acb1d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Passive Components",
      "uuid": "756ad0f4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Patient Affordability",
      "uuid": "756ad045-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Patient Monitors",
      "uuid": "756ad112-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Patient Temperature Monitoring Devices",
      "uuid": "756acc81-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Payment Processing Services",
      "uuid": "756ad008-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Payroll Outsourcing Services",
      "uuid": "756ad0d0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Peanuts",
      "uuid": "756acbf9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Penicillin",
      "uuid": "756acb05-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Permanent Recruitment",
      "uuid": "756ad0d6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Personal Computing",
      "uuid": "756ad405-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Personal Protective Equipment",
      "uuid": "756acd25-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pharmacovigilance Services",
      "uuid": "756ad04b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Phenol",
      "uuid": "756acbd5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Physical Security Services",
      "uuid": "756acce3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pipes, Valves & Fittings",
      "uuid": "756acd49-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Plant Equipment",
      "uuid": "756acc4c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Plastic Bottles",
      "uuid": "756acd5b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Plastic Collapsible Tubes",
      "uuid": "756acc2e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Plastic Jars",
      "uuid": "756acd9d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Plunger Pumps",
      "uuid": "8bf118ec-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Point Of Sale Materials",
      "uuid": "756accaa-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Polybags",
      "uuid": "756acd72-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Polycarbonate",
      "uuid": "756acbdb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Polypropylene",
      "uuid": "756ac920-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Polystyrene",
      "uuid": "756ac93f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pork",
      "uuid": "756ad196-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Potassium Chloride (KCl)",
      "uuid": "756acbb1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Potatoes",
      "uuid": "756ad18a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Poultry",
      "uuid": "756acc0b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pre-Fabricated Buildings & Structures",
      "uuid": "756ad39f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Prefilled Syringes",
      "uuid": "756acc17-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pressure Sensitive Labels",
      "uuid": "756acd7f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Primary Market Research",
      "uuid": "756ac90c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Printed Circuit Boards (PCBs)",
      "uuid": "756ac8fe-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Process Automation",
      "uuid": "756acd2b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Process Instrumentation And Measurement",
      "uuid": "756acd31-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Product Engineering Services",
      "uuid": "756ad3e6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Production Chemicals",
      "uuid": "756ad446-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Professional Education",
      "uuid": "756ad05d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Promotional Items",
      "uuid": "756acca4-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Propylene Glycol",
      "uuid": "756acbe1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Public Relations",
      "uuid": "756aca12-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Pulp",
      "uuid": "756acd85-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Rapeseed Oil and Meal",
      "uuid": "756ad19c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Rare Earth Elements",
      "uuid": "756ad28b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Records Management",
      "uuid": "756accd1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Recovered Paper",
      "uuid": "756acd6c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Refractories",
      "uuid": "756ad10c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Refrigerated Road Freight Services",
      "uuid": "756acb35-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Renewable Energy",
      "uuid": "756ad3a5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Respiratory Devices",
      "uuid": "756ad148-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Returnable Glass Bottles",
      "uuid": "756ac9b8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Rice",
      "uuid": "756aca6a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Rigid Intermediate Bulk Containers (RIBC)",
      "uuid": "756acdc0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Road Freight Services",
      "uuid": "756aca2f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Robotic Process Automation",
      "uuid": "756ad3e0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Robotics",
      "uuid": "756acd37-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Rubber Stoppers",
      "uuid": "756acda8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Saccharin",
      "uuid": "756ad2f0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Salmon",
      "uuid": "756ad1c0-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sand Castings",
      "uuid": "756ac9e2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Secondary Packaging Equipment",
      "uuid": "8bf1190c-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Serum",
      "uuid": "8bf118f7-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Service Integration And Management (SIAM)",
      "uuid": "756ad435-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Shrimp",
      "uuid": "756ad1bb-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Shrink Films",
      "uuid": "756ac9b1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Signage",
      "uuid": "756acc89-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Silicones",
      "uuid": "756acaa5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Social Media Marketing Services",
      "uuid": "756aca0b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Soda Ash",
      "uuid": "756acaab-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Bicarbonate (NaHCO3)",
      "uuid": "756acb73-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Chloride (NaCl)",
      "uuid": "756acbe7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Cyanide",
      "uuid": "756acb65-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Hypochlorite",
      "uuid": "756acbed-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Silicate",
      "uuid": "756acb81-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sodium Sulfate (Na2SO4)",
      "uuid": "756acb87-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Software Asset Management",
      "uuid": "756ad42f-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sorbitol",
      "uuid": "756ad1c6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Soybean",
      "uuid": "756ad2d8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Soybean Oil",
      "uuid": "756ad1a2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Stainless Steel",
      "uuid": "756acc3b-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Starch",
      "uuid": "756ad20c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Stimulation Chemicals",
      "uuid": "756ad184-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Storefront Design & Installation Services",
      "uuid": "756ad35d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Strawberries",
      "uuid": "756acfed-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Stretch Films",
      "uuid": "756ac9ab-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sugar",
      "uuid": "756aca64-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Sulfuric Acid",
      "uuid": "756ac8d3-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Super Absorbent Polymers",
      "uuid": "756acab1-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Switchgears",
      "uuid": "756acae6-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Synthetic Vitamins",
      "uuid": "8bf118e3-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Tablet Coatings",
      "uuid": "756acaff-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Tallow",
      "uuid": "756aca93-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Temporary Labour",
      "uuid": "756ad0dc-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Thermoformed Trays",
      "uuid": "756acdba-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Third Party Administrator Services",
      "uuid": "756ad02d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Threads",
      "uuid": "756acd0d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Tin",
      "uuid": "756ac9ca-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Titanium Dioxide",
      "uuid": "756acab7-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Toluene",
      "uuid": "756acac8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Transformer Oil",
      "uuid": "756ad3ce-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Transformers",
      "uuid": "756acaec-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Translation Services",
      "uuid": "756ad0e8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Tuna",
      "uuid": "756ad1b5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Underground Mining Equipment",
      "uuid": "756acc52-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Uniform Services",
      "uuid": "8bf11908-7679-11eb-b30d-065d719cc759"
  },
  {
      "canonicalForm": "Urea",
      "uuid": "756acb6c-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Vanillin",
      "uuid": "756ad1d8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Ventilators",
      "uuid": "756ad14e-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Veterinary Healthcare Services",
      "uuid": "756ad0b8-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Vials and Ampoules",
      "uuid": "756acc1d-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Viral Vaccines",
      "uuid": "756ad083-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Visual Merchandizing, Fixtures, And Furnishings (VMFF)",
      "uuid": "756aca19-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Vitamin B",
      "uuid": "756acc6a-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Vitamin C",
      "uuid": "756acc70-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Warehousing Services",
      "uuid": "756acb42-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Waste Water Treatment Services ",
      "uuid": "756accc5-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Water",
      "uuid": "756ad3c9-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Wheat",
      "uuid": "756aca70-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Whey Powder",
      "uuid": "756ad207-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Wireline Services",
      "uuid": "756ad178-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Wooden Pallets",
      "uuid": "756acd97-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Xanthan Gum",
      "uuid": "756ad201-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Xylene",
      "uuid": "756acac2-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Xylitol",
      "uuid": "756ad1cc-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Yeast",
      "uuid": "756ad1ef-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Zinc",
      "uuid": "756ac9dc-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Zinc Oxide",
      "uuid": "756acbbd-ea7f-11ea-acc0-0a730e7eabfe"
  },
  {
      "canonicalForm": "Zippers",
      "uuid": "756acd3d-ea7f-11ea-acc0-0a730e7eabfe"
  }
]

// {
//   "canonicalForm": "Beverage Cans",
//   "list": [
//     "beverage cans",
//     "cans",
//     "bottles"
//   ]
// }
// console.log("categories: ", categories)

let new_cat = [];
for (let i = 0; i < categories.length; i++) {
  const element = categories[i];
  // console.log(element)
  new_cat.push(
    {
    "canonicalForm": `${element["canonicalForm"]}`,
    "list": [`${element["canonicalForm"]}`,]
  }
  )
  
}

// console.log("new_cat: ",JSON.stringify(new_cat))




  console.log(luis_resource)~

  let intents = luis_resource.prediction.intents;
  console.log(intents)

  console.log("object.values: ",Object.values(intents))
  console.log("object.keys: ",Object.keys(intents))

  const result = Object.keys(users).reduce((acc, curr) =>    
       acc.age ? (users[curr].age > acc.age ? users[curr] : acc) : users[curr], {});

  console.log(result)


  console.log("topIntent: ", luis_resource.prediction.topIntent)


