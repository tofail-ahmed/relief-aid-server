const supply=[
      {
        "image": "https://satyarthi.org.in/wp-content/uploads/2021/09/girl-student_6139ecd847750.jpg",
        "category": "Education",
        "title": "School Supplies Pack",
        "amount": 50,
        "description": "This pack includes essential supplies like notebooks, pencils, erasers, and rulers to support a child's E."
      },
      {
        "image": "https://cmmb.org/wp-content/uploads/2022/11/Medical-Donations_Sri-Lanka_Nov2022-960x540.jpg",
        "category": "Health",
        "title": "Medical Kits",
        "amount": 100,
        "description": "These medical kits contain basic first aid supplies such as bandages, antiseptic wipes, and pain relievers, crucial for emergency situations."
      },
      {
        "image": "https://wareham.theweektoday.com/sites/beaverdam/files/2020/11/field/image/IMG-1205.jpg",
        "category": "Housing",
        "title": "Blankets and Sleeping Bags",
        "amount": 30,
        "description": "Help provide warmth and comfort to those in need with blankets and sleeping bags, especially during cold nights."
      },
      {
        "image": "https://www.hearttoheart.org/wp-content/uploads/2022/04/Eddie-Carolee-Featured.png",
        "category": "Sanitation",
        "title": "Hygiene Kits",
        "amount": 20,
        "description": "These kits contain essentials like soap, toothpaste, toothbrushes, and sanitary pads, promoting good hygiene practices."
      },
      {
        "image": "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "category": "Food",
        "title": "Meal Packages",
        "amount": 25,
        "description": "Provide nutritious meals to individuals and families facing food insecurity, ensuring they have access to adequate nutrition."
      },
      {
        "image": "https://www.krome.co.uk/wp-content/uploads/2016/12/StAugustineMain.jpg",
        "category": "Education",
        "title": "Laptop for Education",
        "amount": 300,
        "description": "Equip students with the necessary technology for remote learning by donating laptops, enabling them to access Eal resources online."
      },
      {
        "image": "https://static01.nyt.com/images/2023/09/11/science/11FDA-VACCINE/11FDA-VACCINE-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "category": "Health",
        "title": "Vaccination Kits",
        "amount": 150,
        "description": "Support vaccination efforts by providing kits containing vaccines, syringes, and cold storage equipment to ensure vaccines remain effective."
      },
      {
        "image": "https://archives.sundayobserver.lk/2009/10/25/z_p-21-IDPs-01.jpg",
        "category": "Housing",
        "title": "Emergency Shelter Tents",
        "amount": 75,
        "description": "Provide temporary shelter to those affected by disasters or displacement with sturdy, weather-resistant tents."
      },
      {
        "image": "https://freerangeamerican.us/wp-content/uploads/2022/12/WaterTabs1-2.jpg",
        "category": "Sanitation",
        "title": "Water Purification Tablets",
        "amount": 10,
        "description": "Help prevent waterborne diseases by distributing water purification tablets that make contaminated water safe for consumption."
      },
      {
        "image": "https://www.robertsproperty.co.uk/wp-content/uploads/2022/12/Food-Donations-Roberts-Blog.png",
        "category": "Food",
        "title": "Family Food Basket",
        "amount": 50,
        "description": "Support struggling families by providing food baskets containing staples like rice, beans, cooking oil, and canned goods."
      },
      {
        "image": "https://www.booksforall.org.in/WhatsApp%20Image%202020-06-28%20at%2018.29.04-1.jpeg",
        "category": "Education",
        "title": "Books for Libraries",
        "amount": 20,
        "description": "Donate books to school and community libraries to enhance literacy and provide resources for learning and enjoyment."
      },
      {
        "image": "https://ogden_images.s3.amazonaws.com/www.newsandsentinel.com/images/2020/03/28233649/03-29-20-Donation-4-tle-630x840.jpg",
        "category": "Health",
        "title": "Emergency Medical Supplies",
        "amount": 200,
        "description": "Ensure healthcare facilities are well-equipped to handle emergencies by providing essential medical supplies such as gloves, masks, and sterile equipment."
      },
      {
        "image": "https://smallboatsmonthly.com/wp-content/uploads/2017/07/SoloStoveOpenFlameweb-800x633.jpg",
        "category": "Housing",
        "title": "Portable Stoves",
        "amount": 40,
        "description": "Provide portable stoves to families living in emergency shelters or temporary housing, allowing them to cook meals safely and efficiently."
      },
      {
        "image": "https://northcoastcommunityservice.org/wp-content/uploads/2014/12/toiletryKit.jpg",
        "category": "Sanitation",
        "title": "Toiletry Kits",
        "amount": 15,
        "description": "Ensure proper sanitation and personal hygiene by distributing toiletry kits containing essentials like shampoo, soap, and towels."
      },
      {
        "image": "https://media.istockphoto.com/id/1055191292/photo/multi-ethnic-group-of-volunteers-work-at-food-bank.jpg?s=612x612&w=0&k=20&c=P5ZW95N8BmdbjgvbTECEzudKXweja9deRuHyv6H2DFg=",
        "category": "Food",
        "title": "Nutritional Supplements",
        "amount": 35,
        "description": "Provide essential nutrients to malnourished individuals, especially children and pregnant women, with nutritional supplements like vitamins and minerals."
      },
      {
        "image": "https://t4.ftcdn.net/jpg/04/40/71/15/360_F_440711583_uHcd0Y781low3oKQw0tiXumHqtcX3Lov.jpg",
        "category": "Education",
        "title": "School Uniforms",
        "amount": 15,
        "description": "Ensure all children have access to E by providing school uniforms, reducing barriers to attendance and promoting inclusivity."
      },
      {
        "image": "https://assets-global.website-files.com/5ba0038291da1c097a17b7ec/610d7e7a9dc5af336984a0e1_Robin%20DDNC%20Kits.jpg",
        "category": "Health",
        "title": "Dental Care Kits",
        "amount": 25,
        "description": "Promote oral health by distributing dental care kits containing toothbrushes, toothpaste, and dental floss to individuals in underserved communities."
      },
      {
        "image": "https://media.istockphoto.com/id/1388313478/photo/close-up-of-woman-preparing-box-of-clothing-for-charity.jpg?s=612x612&w=0&k=20&c=Q2p2gwaisW3jBJDgpgDPlehAT_HFCN6datyJtSWYDdA=",
        "category": "Housing",
        "title": "Emergency Blankets",
        "amount": 10,
        "description": "Provide lightweight, compact emergency blankets to individuals facing homelessness or displacement, offering warmth and protection in harsh conditions."
      },
      {
        "image": "https://www.newfortressenergy.com/data/production/styles/910x840/s3/2021-11/_MG_9560a_web.jpg?VersionId=mz7bNlcHBIzxVxlHntU2t.eRg.6PplKw&itok=o5YC51un",
        "category": "Sanitation",
        "title": "Handwashing Stations",
        "amount": 150,
        "description": "Promote hand hygiene and prevent the spread of diseases by installing handwashing stations equipped with soap and clean water in public spaces."
      },
      {
        "image": "https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe",
        "category": "Food",
        "title": "Community Garden Kits",
        "amount": 50,
        "description": "Empower communities to grow their own food sustainably by providing garden kits containing seeds, tools, and guidance on gardening practices."
      }
    ]
    
    const categorizedData = supply.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    
    const categoryTotals = Object.entries(groupedData).map(([category, items]) => ({
      category,
      amount: items.reduce((total, currentItem) => total + currentItem.amount, 0)
    }));
    
    console.log(categoryTotals);