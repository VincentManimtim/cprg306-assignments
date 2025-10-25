
export default function Item(props){

    let { name, quantity, category} = props;

    return (
    <li className="bg-amber-50 m-4 p-4 rounded-2xl">
      <h3 className="text-gray-700 text-lg font-bold">Name: {name}</h3>
      <ul>
        <li className="text-gray-700">Quantity: {quantity}</li>
        <li className="text-gray-700">Category: {category}</li>
      </ul>
    </li>
  );

}