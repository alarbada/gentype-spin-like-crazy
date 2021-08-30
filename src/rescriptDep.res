@unboxed
type meliItemId = ItemId(string)

type orderItem = {
  quantity: int,
  unit_price: int,
  full_unit_price: int,
  listing_type_id: string,
  item: {"id": meliItemId, "category_id": string},
}

type mappedMeliItem = {
  id: string,
  publication_type: string,
  category_id: string,
  price: int,
  original_price: int,
  quantity: int,
  sold_from_catalog: bool,
}

@genType
let getItemIndicators = (_a: string, _orderItems: array<orderItem>): string => {
  failwith("unimplemented")
}
