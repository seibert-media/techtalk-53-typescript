interface DateRange {
    startDate: Date;
    endDate: Date;
}


class RoadmapItem implements DateRange {
    summary: string;
    startDate: Date;
    endDate: Date;
    row = 3;

    constructor(init: ClassWithoutFunctions<RoadmapItem>) {        
        this.summary = init.summary;
        this.startDate = init.startDate;
        this.endDate = init.endDate;
    }

    fu() {

    }
}
type Callable = (...params: any[]) => any;


type ClassWithoutFunctions<T> = {
    [P in keyof T as (T[P] extends Callable ? Exclude<P, P> : P)]: T[P]
}

const items: RoadmapItem[] = [
    new RoadmapItem({
        startDate: new Date(2015, 10, 1),
        endDate: new Date(2021, 5, 14),
        summary: 'So Long',
        row: 1
    }),
    new RoadmapItem({
        startDate: new Date(2020, 10, 1),
        endDate: new Date(2021, 5, 14),
        summary: 'So Long',
        row: 1
    }),
];


