interface Sightings {
  attic: number;
  bathroom: number;
  backyard: number;
  bedroom: number;
  kitchen: number;
}

export function decontaminate(filenames: string[]): Sightings {
  let sightings: Sightings = {
    attic: 0,
    bathroom: 0,
    backyard: 0,
    bedroom: 0,
    kitchen: 0,
  }

  let dict: any = {};
  dict['attic'] = sightings.attic;
  dict['bathroom'] = sightings.bathroom;
  dict['backyard'] = sightings.backyard;
  dict['bedroom'] = sightings.bedroom;
  dict['kitchen'] = sightings.kitchen;
  return dict;
}
