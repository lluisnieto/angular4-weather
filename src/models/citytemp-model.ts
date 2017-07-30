interface data {
    name: string;
    temperature: string;
}

export class CityTemp implements data {
    constructor (public name = null,
                 public temperature = null
    ) {}
}