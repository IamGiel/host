list.forEach(k => {
    
    if(k.name == "food" || k.name == "quality" || k.name == "diversity" || k.name == "security" || k.name == "sustainability" || k.name == "state" || k.name == "city")
    dropdownArray.push({
      label: `${k.name}`,
      value: `${k.id}`
    })
  })