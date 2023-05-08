import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

type TValuePrimitive = null | number | string;
type TValue = {
    [key: string]: TValuePrimitive | Array<TValuePrimitive | TValue> | TValue;
};

export class QueryTrimmerPipe implements PipeTransform {
    transform(value: unknown, metadata: ArgumentMetadata): any {
        if (metadata.type !== 'query' || typeof value !== 'object' || value === null) {
            return value;
        }

        return this.trim(value as TValue);
    }

    private trim(data: TValue): TValue {
        for (const [key, item] of Object.entries(data)) {
            data[key] = this.trimItem(item);
        }

        return data;
    }

    private trimItem(item): TValue[0] {
        if (typeof item === 'string') {
            return item.trim();
        } else if (Array.isArray(item)) {
            return item.map((i) => this.trimItem(i)) as TValue[0];
        } else if (typeof item === 'object' && item !== null) {
            return this.trim(item);
        } else {
            return item;
        }
    }
}
