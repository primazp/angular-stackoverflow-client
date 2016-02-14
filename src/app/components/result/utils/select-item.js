export function selectItem(type, object) {
  let value, name;

  if(type == "user") {
    value = object.user_id;
    name = object.display_name;
  } else {
    value = name = object;
  }

  return {
    value,
    name,
    type
  }
}
