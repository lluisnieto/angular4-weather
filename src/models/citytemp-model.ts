interface data {
    name: string;
    temperature: string;
    timestamp: number;
}

export class CityTemp implements data {
    constructor (public name = null,
                 public temperature = null,
                 public timestamp = null
    ) {}
}