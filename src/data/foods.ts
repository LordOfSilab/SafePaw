import { ToxicFood } from '@/schemas'

export const toxicFoods: ToxicFood[] = [
  {
    id: 'chocolate-dark',
    name: 'Dark Chocolate',
    dangerLevel: 'deadly',
    icon: '🍫',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Restlessness',
      'Excessive thirst & urination',
      'Racing or irregular heartbeat',
      'Muscle tremors',
      'Seizures',
      'Death (in severe cases)',
    ],
    whatToDo:
      'Contact your vet or animal poison control immediately. Do NOT wait for symptoms. Time is critical — treatment within 2 hours of ingestion is most effective.',
    moreInfo:
      'Dark chocolate contains high concentrations of theobromine (~150 mg/oz) and caffeine. Both are methylxanthines that dogs metabolize very slowly. Even a few squares can be lethal for small dogs.',
    tags: ['chocolate', 'theobromine', 'caffeine'],
  },
  {
    id: 'chocolate-milk',
    name: 'Milk Chocolate',
    dangerLevel: 'high',
    icon: '🍫',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Increased thirst',
      'Restlessness',
      'Elevated heart rate',
      'Tremors (large doses)',
    ],
    whatToDo:
      'Contact your vet immediately, especially for small dogs or large amounts. Bring the chocolate packaging so the vet can calculate the theobromine dose.',
    moreInfo:
      'Milk chocolate contains ~50 mg theobromine per oz — less than dark chocolate but still dangerous, especially for small breeds. A large bar can poison a medium-sized dog.',
    tags: ['chocolate', 'theobromine'],
  },
  {
    id: 'chocolate-white',
    name: 'White Chocolate',
    dangerLevel: 'medium',
    icon: '🍫',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Pancreatitis (from high fat)',
      'Lethargy',
    ],
    whatToDo:
      'Monitor your dog closely. Contact your vet if large amounts were consumed or symptoms develop. White chocolate has negligible theobromine but high fat content can cause pancreatitis.',
    moreInfo:
      'White chocolate contains almost no theobromine, so acute toxicity is low. However, the high sugar and fat content can trigger vomiting, diarrhea, and pancreatitis.',
    tags: ['chocolate', 'fat'],
  },
  {
    id: 'grapes',
    name: 'Grapes',
    dangerLevel: 'deadly',
    icon: '🍇',
    symptoms: [
      'Vomiting (often within hours)',
      'Diarrhea',
      'Lethargy',
      'Loss of appetite',
      'Abdominal pain',
      'Decreased urination',
      'Kidney failure',
    ],
    whatToDo:
      'Seek emergency veterinary care immediately. Even a single grape can be lethal for some dogs — the toxic dose is NOT established and ANY amount should be treated as an emergency.',
    moreInfo:
      'The exact toxic compound in grapes is still unknown. The reaction is idiosyncratic — some dogs eat grapes with no ill effects while others die from a single fruit. Do not take chances.',
    tags: ['fruit', 'kidney', 'idiosyncratic'],
  },
  {
    id: 'raisins',
    name: 'Raisins',
    dangerLevel: 'deadly',
    icon: '🍇',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Lethargy',
      'Abdominal pain',
      'Oliguria (decreased urination)',
      'Acute kidney failure',
    ],
    whatToDo:
      'Emergency vet visit required immediately. Raisins are more concentrated than grapes and even one or two can cause acute kidney failure. Induce vomiting only under vet guidance.',
    moreInfo:
      'Raisins are dehydrated grapes and carry the same unknown toxin in a more concentrated form. ~11 g/kg can cause acute kidney failure, but ANY amount is dangerous due to individual sensitivity.',
    tags: ['fruit', 'kidney', 'dried fruit'],
  },
  {
    id: 'xylitol',
    name: 'Xylitol',
    dangerLevel: 'deadly',
    icon: '🍬',
    symptoms: [
      'Vomiting',
      'Hypoglycemia (low blood sugar)',
      'Weakness, collapse',
      'Seizures',
      'Liver failure',
      'Death',
    ],
    whatToDo:
      'EMERGENCY. Call poison control or vet immediately. Xylitol is in sugar-free gum, candy, peanut butter, baked goods, and many oral hygiene products. Act within minutes of ingestion.',
    moreInfo:
      'Xylitol triggers massive insulin release in dogs, causing life-threatening hypoglycemia at doses as low as 50 mg/kg. At 500 mg/kg, acute liver failure occurs. A single piece of sugar-free gum can hospitalize a small dog.',
    tags: ['sweetener', 'sugar-free', 'gum', 'artificial sweetener'],
  },
  {
    id: 'onion',
    name: 'Onion',
    dangerLevel: 'high',
    icon: '🧅',
    symptoms: [
      'Lethargy',
      'Weakness',
      'Reduced appetite',
      'Pale gums',
      'Fainting',
      'Reddish urine (hemolytic anemia)',
      'Vomiting, diarrhea',
    ],
    whatToDo:
      'Contact your vet. Toxic effects from onions accumulate — repeated small doses are as dangerous as one large dose. Symptoms may be delayed up to 5 days after ingestion.',
    moreInfo:
      'All forms are toxic: raw, cooked, powdered, or dehydrated. Onion powder is especially dangerous due to concentration. Toxic dose ~15–30 g/kg for raw onion; onion powder is ~5× more toxic by weight.',
    tags: ['allium', 'anemia', 'cooked', 'powdered'],
  },
  {
    id: 'garlic',
    name: 'Garlic',
    dangerLevel: 'high',
    icon: '🧄',
    symptoms: [
      'Lethargy',
      'Pale or yellowish gums',
      'Weakness',
      'Collapse',
      'Vomiting, diarrhea',
      'Hemolytic anemia',
      'Heinz body formation',
    ],
    whatToDo:
      'Contact your vet immediately. Garlic is 5× more toxic than onions by weight. Even small amounts consumed regularly are dangerous. Japanese breeds (Shiba Inu, Akita) are particularly sensitive.',
    moreInfo:
      'Garlic contains thiosulfate compounds that damage red blood cells, causing hemolytic anemia. The toxic dose is ~15–30 g/kg but effects are cumulative. Garlic supplements marketed for dogs are controversial and potentially harmful.',
    tags: ['allium', 'anemia', 'thiosulfate'],
  },
  {
    id: 'avocado',
    name: 'Avocado',
    dangerLevel: 'medium',
    icon: '🥑',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Breathing difficulty (in large amounts)',
      'Fluid accumulation around heart (rare)',
      'Pancreatitis',
    ],
    whatToDo:
      'Contact your vet if large amounts were consumed or symptoms develop. The avocado pit is a physical choking hazard. Monitor breathing carefully.',
    moreInfo:
      'Avocado contains persin, a fungicidal toxin. Dogs are more resistant than other animals (birds, rabbits) but large amounts of flesh, skin, or leaves can cause cardiac and respiratory issues. The pit is also a choking/obstruction risk.',
    tags: ['persin', 'pit hazard', 'fat'],
  },
  {
    id: 'macadamia-nuts',
    name: 'Macadamia Nuts',
    dangerLevel: 'high',
    icon: '🥜',
    symptoms: [
      'Weakness, especially hind legs',
      'Hyperthermia (fever)',
      'Vomiting',
      'Tremors',
      'Lethargy',
      'Inability to walk',
    ],
    whatToDo:
      'Contact your vet immediately. Even small amounts (as few as 6 nuts) can cause serious symptoms in small dogs. Symptoms typically appear within 12 hours.',
    moreInfo:
      'The toxic mechanism of macadamia nuts in dogs is not fully understood. Reported toxic dose: ~2.4 g/kg. Symptoms usually resolve within 48 hours but veterinary supportive care is important.',
    tags: ['nuts', 'neurological'],
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    dangerLevel: 'deadly',
    icon: '🍺',
    symptoms: [
      'Vomiting',
      'Disorientation',
      'Sedation',
      'Lack of coordination',
      'Breathing difficulty',
      'Dangerously low blood sugar',
      'Seizures',
      'Death',
    ],
    whatToDo:
      'Emergency vet care required immediately. Dogs are far more sensitive to alcohol than humans. Even small amounts of beer, wine, or spirits can cause alcohol poisoning. This includes fermented foods.',
    moreInfo:
      'Dogs have lower body weight and less efficient alcohol metabolism. Ethanol from any source (drinks, raw dough, certain fruits) is dangerous. Symptoms can appear within 30 minutes.',
    tags: ['ethanol', 'spirits', 'beer', 'wine', 'fermented'],
  },
  {
    id: 'caffeine',
    name: 'Caffeine',
    dangerLevel: 'high',
    icon: '☕',
    symptoms: [
      'Restlessness, hyperactivity',
      'Vomiting, diarrhea',
      'Elevated heart rate',
      'Elevated blood pressure',
      'Tremors',
      'Seizures',
      'Collapse',
    ],
    whatToDo:
      'Contact your vet immediately. Found in coffee, tea, energy drinks, cola, some medications, and dark chocolate. There is no antidote — treatment is supportive.',
    moreInfo:
      'Like theobromine, caffeine is a methylxanthine that dogs metabolize slowly. Toxic dose ~140 mg/kg. A few coffee grounds or tea bags can be lethal for small dogs.',
    tags: ['methylxanthine', 'coffee', 'tea', 'energy drink'],
  },
  {
    id: 'raw-dough',
    name: 'Raw Yeast Dough',
    dangerLevel: 'high',
    icon: '🍞',
    symptoms: [
      'Bloating, distended abdomen',
      'Vomiting',
      'Disorientation',
      'Stumbling (ethanol toxicity)',
      'Severe abdominal pain',
      'Gastric bloat (GDV risk)',
    ],
    whatToDo:
      'Seek emergency vet care immediately. Do NOT induce vomiting — rising dough can block the airway. The dough continues to expand in the stomach and ferments to produce ethanol.',
    moreInfo:
      'Yeast fermentation in the warm stomach produces CO₂ (causing painful bloating and risk of GDV) and ethanol (causing alcohol poisoning). Both effects can be fatal without prompt treatment.',
    tags: ['bread', 'baking', 'yeast', 'ethanol'],
  },
  {
    id: 'nutmeg',
    name: 'Nutmeg',
    dangerLevel: 'high',
    icon: '🫙',
    symptoms: [
      'Disorientation, confusion',
      'Increased heart rate',
      'Dry mouth',
      'Abdominal pain',
      'Hallucinations (in high doses)',
      'Seizures',
    ],
    whatToDo:
      'Contact your vet immediately. Often found in baked goods, eggnog, and seasoning blends. Small amounts in baked goods are usually low risk; larger doses or direct ingestion require urgent care.',
    moreInfo:
      'Nutmeg contains myristicin, a compound toxic to dogs that causes central nervous system effects. Toxic dose is ~1 teaspoon (5 g), but effects can be seen with less.',
    tags: ['spice', 'myristicin', 'CNS'],
  },
  {
    id: 'cooked-bones',
    name: 'Cooked Bones',
    dangerLevel: 'high',
    icon: '🦴',
    symptoms: [
      'Choking',
      'Mouth/throat lacerations',
      'Gastrointestinal perforation',
      'Intestinal blockage',
      'Internal bleeding',
      'Peritonitis',
    ],
    whatToDo:
      'If your dog has swallowed a cooked bone, contact your vet. Do NOT induce vomiting — bone fragments may cause more damage. Seek emergency care if the dog shows signs of distress, bloating, or bloody stool.',
    moreInfo:
      'Cooking makes bones brittle, causing them to splinter into sharp shards that can perforate the esophagus, stomach, or intestines. Chicken, turkey, pork, and fish bones are especially dangerous when cooked.',
    tags: ['physical hazard', 'perforation', 'chicken', 'turkey'],
  },
  {
    id: 'salt',
    name: 'Salt (High Amounts)',
    dangerLevel: 'medium',
    icon: '🧂',
    symptoms: [
      'Excessive thirst and urination',
      'Vomiting, diarrhea',
      'Lethargy',
      'Muscle tremors',
      'Seizures (severe salt poisoning)',
      'Coma',
    ],
    whatToDo:
      'Provide fresh water and contact your vet. Do NOT encourage rapid drinking — rehydrating too fast can cause brain swelling. Salty snacks like chips, pretzels, and popcorn are common culprits.',
    moreInfo:
      'Salt poisoning (hypernatremia) occurs at ~4 g/kg of body weight. Regular salty snacks can add up quickly for small dogs. Ocean water ingestion is also a risk.',
    tags: ['sodium', 'chips', 'pretzels', 'hypernatremia'],
  },
  {
    id: 'black-walnuts',
    name: 'Black Walnuts',
    dangerLevel: 'high',
    icon: '🌰',
    symptoms: [
      'Vomiting',
      'Tremors, muscle twitching',
      'Seizures',
      'Lethargy',
      'Weakness, incoordination',
      'Elevated temperature',
    ],
    whatToDo:
      'Contact your vet immediately. Black walnuts on the ground can also be contaminated with mold (Penitrem A) that dramatically increases neurological toxicity. Do not let dogs forage under walnut trees.',
    moreInfo:
      'Black walnuts (Juglans nigra) contain juglone, a toxic compound more concentrated than in English walnuts. Moldy black walnuts are especially dangerous — the tremorgenic mycotoxin Penitrem A can cause severe seizures. English walnuts are lower risk but still not recommended.',
    tags: ['nuts', 'juglone', 'mold', 'mycotoxin', 'neurological'],
  },
  {
    id: 'stone-fruit-pits',
    name: 'Cherry, Apricot & Peach Pits and Leaves',
    dangerLevel: 'high',
    icon: '🍑',
    symptoms: [
      'Dilated pupils',
      'Difficulty breathing',
      'Bright red gums',
      'Panting',
      'Shock',
      'Seizures',
      'Loss of consciousness',
      'Death (severe cyanide poisoning)',
    ],
    whatToDo:
      'Emergency vet care immediately if pits, stems, or leaves were chewed and ingested. The flesh of these fruits is generally safe; the danger lies in the seeds and plant material. Cyanide poisoning acts very fast.',
    moreInfo:
      'Pits and leaves of cherries, apricots, peaches, and plums contain amygdalin, which metabolises to hydrogen cyanide (HCN) when chewed. Symptoms can appear within minutes to hours. A single cracked pit can release a dangerous dose for a small dog.',
    tags: ['cyanide', 'amygdalin', 'pit', 'stone fruit', 'cherry', 'apricot', 'peach', 'plum'],
  },
  {
    id: 'green-tomato',
    name: 'Green Tomato & Tomato Leaves',
    dangerLevel: 'medium',
    icon: '🍅',
    symptoms: [
      'Hypersalivation',
      'Loss of appetite',
      'Severe gastrointestinal upset',
      'Drowsiness, lethargy',
      'Weakness',
      'Confusion',
      'Slow heart rate (large doses)',
    ],
    whatToDo:
      'Contact your vet if green tomatoes or plant material (leaves, stems) were consumed. Ripe red tomato flesh is low risk but avoid giving dogs access to the tomato plant itself.',
    moreInfo:
      'The green parts of the tomato plant (leaves, stems, unripe fruit) contain solanine and tomatine — toxic alkaloids from the nightshade family. Ripening destroys most of these compounds, making red tomato flesh generally safe in small amounts. The plant leaves and stems remain toxic at all stages.',
    tags: ['nightshade', 'solanine', 'tomatine', 'plant leaves'],
  },
  {
    id: 'raw-salmon',
    name: 'Raw Salmon (Salmon Poisoning Disease)',
    dangerLevel: 'deadly',
    icon: '🐟',
    symptoms: [
      'Vomiting',
      'Diarrhea (often bloody)',
      'Fever, then drop in temperature',
      'Lethargy, weakness',
      'Swollen lymph nodes',
      'Dehydration',
      'Death within 14 days if untreated',
    ],
    whatToDo:
      'Seek emergency vet care immediately if raw salmon or trout from Pacific waters was consumed. Salmon Poisoning Disease (SPD) is nearly always fatal without antibiotic treatment. Do NOT wait for symptoms — treatment must start early.',
    moreInfo:
      "Salmon Poisoning Disease is caused by Neorickettsia helminthoeca, a bacterium carried by a fluke (Nanophyetus salmincola) that parasitises Pacific salmon and trout. It is specific to dogs (not cats or humans). It is only a risk in raw fish from the Pacific Northwest (western USA/Canada). Proper cooking eliminates the risk entirely.",
    tags: ['raw fish', 'salmon', 'trout', 'Pacific', 'bacteria', 'parasite'],
  },
  {
    id: 'apple-pear-seeds',
    name: 'Apple & Pear Seeds (Cores)',
    dangerLevel: 'medium',
    icon: '🍎',
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Panting',
      'Dilated pupils',
      'Shock (very large quantities)',
    ],
    whatToDo:
      'Contact your vet if a large number of seeds or cores were consumed. Small accidental ingestion of 1–2 seeds is generally low risk for larger dogs but warrants monitoring. The fruit flesh is safe and nutritious.',
    moreInfo:
      'Apple and pear seeds contain amygdalin, which releases hydrogen cyanide when metabolized. A large dog would need to ingest many seeds to experience toxicity, but small dogs are at higher risk. Always core fruits before offering them as treats.',
    tags: ['cyanide', 'amygdalin', 'seeds', 'apple', 'pear', 'core'],
  },
  {
    id: 'wild-mushrooms',
    name: 'Wild Mushrooms',
    dangerLevel: 'deadly',
    icon: '🍄',
    symptoms: [
      'Vomiting, diarrhea',
      'Excessive salivation or dryness',
      'Weakness, lethargy',
      'Jaundice (liver failure)',
      'Seizures',
      'Coma',
      'Death',
    ],
    whatToDo:
      "Emergency vet care immediately. If possible, bring a sample or photo of the mushroom. Do NOT induce vomiting without vet guidance. Death cap (Amanita phalloides) and destroying angel (Amanita bisporigera) are responsible for most fatal dog poisonings — symptoms may be delayed 6–24 hours after ingestion.",
    moreInfo:
      'Most store-bought culinary mushrooms (button, portobello, shiitake) are safe for dogs. The danger is from wild mushrooms, which are difficult to identify. Amatoxin-containing species cause irreversible liver failure. Because symptoms can be delayed while damage is occurring internally, any wild mushroom ingestion should be treated as an emergency.',
    tags: ['fungi', 'Amanita', 'amatoxin', 'liver failure', 'death cap'],
  },
  {
    id: 'spicy-foods',
    name: 'Spicy Foods',
    dangerLevel: 'low',
    icon: '🌶️',
    symptoms: [
      'Diarrhea',
      'Vomiting',
      'Excessive gas and bloating',
      'Stomach pain',
      'Excessive thirst',
      'Pawing at mouth or face',
    ],
    whatToDo:
      'Provide fresh water and bland food (plain rice and boiled chicken). Contact your vet if vomiting or diarrhea is severe or persists longer than 24 hours.',
    moreInfo:
      "Capsaicin (the compound that makes foods hot) is not systemically toxic to dogs, but it causes significant GI irritation and discomfort. Dogs lack receptors adapted to enjoy spice and experience only the pain without any pleasure. Spicy foods often contain other toxic ingredients such as onion and garlic powder — always check the full ingredient list.",
    tags: ['capsaicin', 'chili', 'pepper', 'hot sauce', 'spice'],
  },
  {
    id: 'excess-liver',
    name: 'Excess Liver (Hypervitaminosis A)',
    dangerLevel: 'medium',
    icon: '🫀',
    symptoms: [
      'Bone and muscle pain',
      'Stiffness, especially in the neck and front legs',
      'Weight loss',
      'Lethargy',
      'Abnormal bone growth (exostoses)',
      'Constipation',
    ],
    whatToDo:
      'Contact your vet if liver has been a frequent part of your dog\'s diet. This is a chronic toxicity — a single serving is not a crisis. Symptoms develop over weeks or months of excessive intake.',
    moreInfo:
      'Liver is highly nutritious and safe in moderation (once a week as a treat). However, liver is extremely rich in vitamin A — regular large portions cause vitamin A accumulation in the body (hypervitaminosis A), leading to painful bone abnormalities and joint deformities that can become permanent. Cod liver oil given in excess carries the same risk.',
    tags: ['vitamin A', 'hypervitaminosis', 'organ meat', 'chronic', 'bone'],
  },
  {
    id: 'dairy-milk',
    name: 'Dairy / Milk',
    dangerLevel: 'low',
    icon: '🥛',
    symptoms: [
      'Diarrhea',
      'Loose stools',
      'Vomiting',
      'Flatulence',
      'Abdominal discomfort',
    ],
    whatToDo:
      'Withhold dairy and provide fresh water. Symptoms typically resolve on their own within 24 hours. Contact your vet if diarrhea is severe or prolonged.',
    moreInfo:
      'Most adult dogs are lactose intolerant — they produce little to no lactase enzyme after puppyhood. Milk and cream cause osmotic diarrhea. Plain water is always the best drink for dogs. Some dogs tolerate small amounts without issue, but it varies by individual.',
    tags: ['lactose', 'dairy', 'intolerance', 'milk', 'cream'],
  },
  {
    id: 'cheese-large-amounts',
    name: 'Cheese (Large Amounts)',
    dangerLevel: 'low',
    icon: '🧀',
    symptoms: [
      'Diarrhea',
      'Vomiting',
      'Flatulence',
      'Pancreatitis (high-fat varieties)',
      'Weight gain (chronic)',
    ],
    whatToDo:
      'Reduce or eliminate cheese from the diet. Monitor for signs of pancreatitis (vomiting, hunched posture, abdominal pain) and contact your vet if these appear — pancreatitis is a serious condition.',
    moreInfo:
      'Small amounts of low-fat cheese (ricotta, mozzarella) are often used as high-value training treats and are generally tolerated. The risks arise from large or frequent amounts: the high fat content can trigger pancreatitis, especially in breeds prone to it (miniature schnauzers, cocker spaniels, Yorkshire terriers). Blue cheese and some rinds may also contain roquefortine C, a toxin that causes tremors.',
    tags: ['lactose', 'dairy', 'fat', 'pancreatitis', 'blue cheese'],
  },
]
