export class car {
    protected brand: string;
    protected model: string;
    protected year: number;
    private stored: boolean ;

    constructor(brand: string, model:string, year: number, stored: boolean = false){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.stored = stored;
    }

    public setStored (value: boolean): void {
        this.stored = value;
    }


    public isStored(): boolean {
        return this.stored;
    }

    public getModel(): string {
        return this.model;
      }

    public getBrand(): string {
        return this.brand;
      }

    public getYear(): number {
        return this.year;
      }
};