/* TypeScript file generated from rescriptDep.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as rescriptDepBS__Es6Import from './rescriptDep.bs';
const rescriptDepBS: any = rescriptDepBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type meliItemId = string;

// tslint:disable-next-line:interface-over-type-literal
export type orderItem = {
  readonly quantity: number; 
  readonly unit_price: number; 
  readonly full_unit_price: number; 
  readonly listing_type_id: string; 
  readonly item: {
    readonly id: meliItemId; 
    readonly category_id: string
  }
};

export const getItemIndicators: (_a:string, _orderItems:orderItem[]) => string = function (Arg1: any, Arg2: any) {
  const result = Curry._2(rescriptDepBS.getItemIndicators, Arg1, Arg2);
  return result
};
