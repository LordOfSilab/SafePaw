import { ToxicPlant } from '@/schemas'

export const toxicPlants: ToxicPlant[] = [
  {
    id: 'oleander',
    name: 'Oleander',
    scientificName: 'Nerium oleander',
    dangerLevel: 'deadly',
    icon: '🌸',
    toxicParts: ['All parts — leaves, flowers, stems, roots, even smoke from burning'],
    symptoms: [
      'Severe vomiting',
      'Diarrhea (possibly bloody)',
      'Drooling',
      'Abdominal pain',
      'Heart arrhythmia',
      'Low blood pressure',
      'Tremors, muscle weakness',
      'Death',
    ],
    whatToDo:
      'Emergency vet care immediately. Oleander is one of the most toxic garden plants. Even a few leaves can kill a dog. Every part of the plant is lethal — do not handle without gloves yourself.',
    moreInfo:
      'Oleander contains cardiac glycosides (oleandrin, neriine) that disrupt heart rhythm. Fatalities have been reported from dogs drinking water from a vase containing oleander cuttings.',
  },
  {
    id: 'sago-palm',
    name: 'Sago Palm',
    scientificName: 'Cycas revoluta',
    dangerLevel: 'deadly',
    icon: '🌴',
    toxicParts: ['All parts, especially the seeds (nuts)'],
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Lethargy',
      'Abdominal pain',
      'Jaundice (yellow skin/eyes)',
      'Bleeding disorders',
      'Liver failure',
      'Death',
    ],
    whatToDo:
      'EMERGENCY — go to the vet immediately. The survival rate is only ~50% even with treatment. Seeds are the most toxic part and are often mistaken for food by dogs. Do not delay even if symptoms have not appeared.',
    moreInfo:
      'Sago palm contains cycasin, a potent liver toxin. As few as one or two seeds can cause fatal liver failure. The plant is commonly found in subtropical gardens and sold as a houseplant.',
  },
  {
    id: 'lily',
    name: 'Lily',
    scientificName: 'Lilium / Hemerocallis spp.',
    dangerLevel: 'deadly',
    icon: '💐',
    toxicParts: ['All parts — flowers, leaves, stems, pollen, even the water in the vase'],
    symptoms: [
      'Vomiting',
      'Lethargy',
      'Loss of appetite',
      'Kidney failure (within 24–72 hours)',
      'Decreased urination',
      'Tremors',
    ],
    whatToDo:
      'Emergency vet care immediately. True lilies (Tiger, Asiatic, Easter, Day lily) cause acute kidney failure in dogs. Even small exposures require urgent treatment. Time is critical.',
    moreInfo:
      'While lily toxicity is most notorious in cats, true lilies are also dangerous for dogs. The exact nephrotoxic compound is unknown. Lily of the Valley (Convallaria) also causes cardiac toxicity in dogs.',
  },
  {
    id: 'azalea',
    name: 'Azalea / Rhododendron',
    scientificName: 'Rhododendron spp.',
    dangerLevel: 'deadly',
    icon: '🌺',
    toxicParts: ['All parts, including flowers, leaves, nectar, and honey made from the flowers'],
    symptoms: [
      'Drooling',
      'Vomiting, diarrhea',
      'Weakness',
      'Loss of coordination',
      'Heart arrhythmia',
      'Low blood pressure',
      'Seizures',
      'Coma',
    ],
    whatToDo:
      'Emergency vet care immediately. Even a small amount of leaves or flowers can cause life-threatening toxicity. Induce vomiting only under vet guidance.',
    moreInfo:
      'Azaleas and rhododendrons contain grayanotoxins that bind to sodium channels in nerve and muscle cells, disrupting heart and neurological function. Widely used as ornamental shrubs — be especially vigilant in spring.',
  },
  {
    id: 'dieffenbachia',
    name: 'Dieffenbachia',
    scientificName: 'Dieffenbachia spp.',
    dangerLevel: 'high',
    icon: '🌿',
    toxicParts: ['All parts — especially stems and leaves'],
    symptoms: [
      'Intense oral burning and pain',
      'Excessive drooling',
      'Swollen mouth, lips, tongue',
      'Difficulty swallowing',
      'Vomiting',
      'Breathing difficulty (if throat swells)',
    ],
    whatToDo:
      'Rinse the mouth with water and contact your vet. Severe swelling can obstruct breathing — seek emergency care if the dog shows any breathing difficulty. Do not give milk or induce vomiting.',
    moreInfo:
      'Also called "Dumb Cane." Contains insoluble calcium oxalate crystals that cause immediate and intense burning pain. The crystals act like tiny needles in the tissues. Swelling can be dramatic but is rarely fatal unless airway is compromised.',
  },
  {
    id: 'ivy',
    name: 'English Ivy',
    scientificName: 'Hedera helix',
    dangerLevel: 'medium',
    icon: '🌿',
    toxicParts: ['Leaves and berries (leaves most common)'],
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Drooling',
      'Abdominal pain',
      'Skin irritation',
    ],
    whatToDo:
      'Contact your vet if more than a small amount was consumed. Rinse mouth with water. Usually not life-threatening but can cause significant gastrointestinal upset.',
    moreInfo:
      'English ivy contains triterpenoid saponins (hederagenin) and falcarinol. The berries are more toxic than the leaves. Symptoms are typically GI and generally resolve with supportive care.',
  },
  {
    id: 'mistletoe',
    name: 'Mistletoe',
    scientificName: 'Viscum album / Phoradendron spp.',
    dangerLevel: 'high',
    icon: '🌿',
    toxicParts: ['All parts — berries, leaves, stems'],
    symptoms: [
      'Vomiting, diarrhea',
      'Lethargy',
      'Low blood pressure',
      'Heart arrhythmia',
      'Seizures',
      'Respiratory depression',
      'Collapse',
    ],
    whatToDo:
      'Contact your vet immediately if berries or leaves were ingested. American mistletoe (Phoradendron) is less toxic than European (Viscum album) but both require veterinary attention.',
    moreInfo:
      'Mistletoe berries and leaves contain viscotoxins and lectins that affect the cardiovascular and nervous systems. Keep out of reach especially during the holiday season.',
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    dangerLevel: 'medium',
    icon: '🌵',
    toxicParts: ['Latex layer beneath the skin (not the clear gel)'],
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Lethargy',
      'Tremors (rare, large doses)',
      'Anorexia',
    ],
    whatToDo:
      'Contact your vet if a significant amount of plant material (not store-bought gel) was ingested. Monitor for vomiting and diarrhea. Provide fresh water.',
    moreInfo:
      'The clear inner gel of aloe vera is non-toxic, but the yellow latex layer just beneath the skin contains anthraquinones (aloin, barbaloin) which act as irritant laxatives and can be toxic in large amounts.',
  },
  {
    id: 'tulip-bulbs',
    name: 'Tulip Bulbs',
    scientificName: 'Tulipa spp.',
    dangerLevel: 'high',
    icon: '🌷',
    toxicParts: ['Bulbs (highest concentration), also stems and leaves'],
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Drooling',
      'Depression, lethargy',
      'Increased heart rate',
      'Breathing difficulty (large amounts)',
    ],
    whatToDo:
      'Contact your vet. Bulbs are the most dangerous part and are often dug up by dogs. Even small pieces of bulb can cause significant GI distress.',
    moreInfo:
      'Tulip bulbs contain tulipalin A and B (allergenic lactones) concentrated in the bulb. Dogs that dig in gardens are at particular risk during spring planting and fall bulb storage. Hyacinth bulbs carry a similar risk.',
  },
  {
    id: 'rhododendron',
    name: 'Rhododendron',
    scientificName: 'Rhododendron maximum',
    dangerLevel: 'deadly',
    icon: '🌸',
    toxicParts: ['All parts — leaves, flowers, pollen, nectar'],
    symptoms: [
      'Drooling',
      'Vomiting, diarrhea',
      'Muscle weakness, ataxia',
      'Vision loss (temporary)',
      'Bradycardia (slow heart rate)',
      'Severe low blood pressure',
      'Seizures, coma',
    ],
    whatToDo:
      'Emergency vet care immediately. Rhododendron toxicity is a cardiovascular emergency. Do not delay — even a few leaves can be lethal. Inform the vet of the plant involved.',
    moreInfo:
      'Rhododendron (including many azalea varieties) contains grayanotoxins. As little as 0.2% of the dog\'s body weight in leaves can cause severe poisoning. Common in wooded areas and gardens across North America and Europe.',
  },
  {
    id: 'cyclamen',
    name: 'Cyclamen',
    scientificName: 'Cyclamen spp.',
    dangerLevel: 'high',
    icon: '🌸',
    toxicParts: ['Tubers/roots (highest concentration), leaves and flowers'],
    symptoms: [
      'Drooling, hypersalivation',
      'Vomiting',
      'Diarrhea',
      'Heart arrhythmia',
      'Seizures',
      'Death (large root ingestion)',
    ],
    whatToDo:
      'Contact your vet immediately. The tubers are the most toxic part and are often the most accessible — dogs may dig them up. Even chewing on leaves or flowers warrants a vet call.',
    moreInfo:
      'Cyclamen contains triterpenoid saponins (cyclamins), concentrated primarily in the root tubers. It is a very popular houseplant and gift flower, making accidental exposure common. Ingestion of the tuber can cause life-threatening cardiac arrhythmia.',
  },
  {
    id: 'calla-lily',
    name: 'Calla Lily',
    scientificName: 'Zantedeschia aethiopica',
    dangerLevel: 'high',
    icon: '🌼',
    toxicParts: ['All parts — leaves, flowers, roots, stem'],
    symptoms: [
      'Immediate intense oral burning and pain',
      'Excessive drooling',
      'Pawing at mouth',
      'Swollen mouth, lips, tongue',
      'Vomiting',
      'Difficulty swallowing',
      'Breathing difficulty if throat swells severely',
    ],
    whatToDo:
      'Rinse the mouth with water and contact your vet. Seek emergency care if swelling is causing breathing difficulty. Do not induce vomiting.',
    moreInfo:
      'Calla lily (and other Zantedeschia / Arum family plants) contain insoluble calcium oxalate crystals — the same mechanism as Dieffenbachia. The crystals cause intense immediate pain and tissue swelling. Despite the dramatic symptoms, fatalities are rare unless the airway is compromised.',
  },
  {
    id: 'daffodil-narcissus',
    name: 'Daffodil / Narcissus Bulbs',
    scientificName: 'Narcissus spp.',
    dangerLevel: 'high',
    icon: '🌼',
    toxicParts: ['Bulbs (most toxic), but all parts including stems, leaves, flowers'],
    symptoms: [
      'Intense vomiting',
      'Diarrhea (possibly bloody)',
      'Drooling',
      'Abdominal pain',
      'Low blood pressure',
      'Tremors',
      'Cardiac arrhythmia',
    ],
    whatToDo:
      'Contact your vet immediately. Bulbs are particularly dangerous and are often dug up by curious dogs in spring. Do not wait for symptoms — gastrointestinal decontamination is most effective early.',
    moreInfo:
      'Daffodil and narcissus plants contain lycorine and other alkaloids, plus calcium oxalate crystals in the bulbs. The bulbs are the most toxic part. Daffodil water (vase water after cut flowers) is also toxic. All Narcissus family plants (jonquils, amaryllis) carry similar risk.',
  },
  {
    id: 'wisteria',
    name: 'Wisteria',
    scientificName: 'Wisteria spp.',
    dangerLevel: 'medium',
    icon: '🌿',
    toxicParts: ['Seeds and seed pods (most toxic), bark, flowers'],
    symptoms: [
      'Vomiting (sometimes persistent)',
      'Diarrhea',
      'Drooling',
      'Depression, lethargy',
      'Abdominal pain',
      'Dehydration (from prolonged vomiting)',
    ],
    whatToDo:
      'Contact your vet. Seeds and pods are the primary concern. Even a couple of seeds can cause persistent vomiting. Monitor carefully and seek veterinary care if vomiting is prolonged or severe.',
    moreInfo:
      'Wisteria contains wisterin (a glycoside) and lectin compounds concentrated mainly in the seeds and pods. The beautiful hanging seed pods in autumn are a common source of ingestion. The toxicity is generally not fatal but can cause significant GI distress requiring supportive care.',
  },
  {
    id: 'lantana',
    name: 'Lantana',
    scientificName: 'Lantana camara',
    dangerLevel: 'deadly',
    icon: '🌼',
    toxicParts: ['All parts — berries especially dangerous, also leaves and flowers'],
    symptoms: [
      'Severe vomiting, diarrhea',
      'Weakness, lethargy',
      'Loss of appetite',
      'Jaundice (yellow skin and eyes)',
      'Liver failure',
      'Photosensitisation (skin reaction to sunlight)',
      'Death',
    ],
    whatToDo:
      'Emergency vet care immediately. Lantana berries resemble edible wild berries and are highly attractive to dogs. Even a small number of unripe green berries can cause fatal liver failure. Do not wait for jaundice to appear — by then liver damage is already severe.',
    moreInfo:
      "Lantana contains lantadene A and B — triterpenoid toxins that cause cholestatic liver disease and photosensitisation. It is one of the world's most toxic garden plants for livestock and dogs. Widely grown as an ornamental shrub in warm climates. Green (unripe) berries are more toxic than ripe ones.",
  },
  {
    id: 'cannabis',
    name: 'Cannabis (Marijuana)',
    scientificName: 'Cannabis sativa / indica',
    dangerLevel: 'high',
    icon: '🌿',
    toxicParts: ['All parts — flowers and concentrated products (edibles, oils, wax) are most dangerous'],
    symptoms: [
      'Dilated pupils',
      'Disorientation, stumbling',
      'Dribbling urine',
      'Vomiting',
      'Tremors or seizures',
      'Slow or fast heart rate',
      'Lethargy, coma (severe cases)',
    ],
    whatToDo:
      'Contact your vet immediately. Be honest about the substance — vets are there to help your dog, not to judge. Concentrated products (THC edibles, oils, wax, dabs) pose a much higher risk than plant material and require urgent emergency care.',
    moreInfo:
      'Dogs have more cannabinoid receptors than humans and are significantly more sensitive to THC. Clinical signs appear within 30–90 minutes of ingestion. Most cases resolve with supportive care, but high-concentration edibles (especially sugar-free ones containing xylitol) can be life-threatening. Cases have increased substantially since legalisation in many regions.',
  },
  {
    id: 'poinsettia',
    name: 'Poinsettia',
    scientificName: 'Euphorbia pulcherrima',
    dangerLevel: 'low',
    icon: '🌿',
    toxicParts: ['Leaves, stems (milky sap is the irritant)'],
    symptoms: [
      'Mild vomiting',
      'Drooling',
      'Diarrhea',
      'Skin irritation if sap contacts skin',
      'Mild eye irritation',
    ],
    whatToDo:
      'Rinse the mouth and any skin areas with water. Symptoms are usually mild and self-limiting. Contact your vet if vomiting is prolonged or the dog ate a large amount.',
    moreInfo:
      'Poinsettia has an exaggerated reputation for toxicity. The milky latex sap is a mild irritant that causes localised GI and skin irritation, but serious poisoning is very unlikely. It is still sensible to keep plants out of reach, especially in combination with other holiday hazards (mistletoe, Christmas tree water, tinsel).',
  },
  {
    id: 'ficus',
    name: 'Ficus / Weeping Fig',
    scientificName: 'Ficus benjamina',
    dangerLevel: 'medium',
    icon: '🌳',
    toxicParts: ['Leaves and sap (all parts, but sap is primary irritant)'],
    symptoms: [
      'Drooling',
      'Vomiting',
      'Diarrhea',
      'Oral irritation',
      'Skin rash or irritation from sap contact',
      'Itching',
    ],
    whatToDo:
      'Contact your vet if leaves or sap were ingested. Rinse any sap from the skin or eyes with water. Usually not life-threatening, but the GI irritation can be significant, especially for small dogs.',
    moreInfo:
      "Ficus plants (including rubber plants, fiddle-leaf figs) produce a milky latex sap containing ficin and other proteolytic enzymes and irritants. The sap is a dermal and GI irritant. Some dogs are more sensitive than others. Ficus is one of the most common houseplants worldwide, making accidental exposure frequent.",
  },
  {
    id: 'hydrangea',
    name: 'Hydrangea',
    scientificName: 'Hydrangea macrophylla',
    dangerLevel: 'medium',
    icon: '💐',
    toxicParts: ['Flower buds and leaves (highest concentration)'],
    symptoms: [
      'Vomiting',
      'Diarrhea',
      'Lethargy',
      'Depression',
      'Abdominal pain',
    ],
    whatToDo:
      'Contact your vet. Most ingestions cause moderate GI upset that resolves with supportive care. Seek veterinary attention if large amounts were eaten or symptoms persist.',
    moreInfo:
      'Hydrangeas contain cyanogenic glycosides (hydrangin / amygdalin) that can release small amounts of cyanide when metabolised. In practice, the cyanide yield is low and serious poisoning requires ingestion of large quantities, making it a medium-risk rather than deadly plant. Still, it should be kept out of reach.',
  },
]
