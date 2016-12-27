
export interface INumberFormatter {
    format(value: number, precision: number) : string;
}

export class TreasuryNumberFormatter implements INumberFormatter {
    format(value: number, precision: number) : string {
        return value.toFixed(precision).replace('.','-');
    }
}
export class DecimelNumberFormatter implements INumberFormatter {
    format(value: number, precision: number) : string {
        if(value && value > 0) {
            let prec = precision ? precision : 0;
            return value.toFixed(prec);
        } else {
            return "";
        }
    }
}

export class NumberFormatterResolver {
    public static resolve(format: string) : INumberFormatter {
        let formatter = new DecimelNumberFormatter();
        if(format && format.length>0 && format.toLowerCase() === 'treasury') {
            formatter = new TreasuryNumberFormatter();
        }
        return formatter;
    }
}