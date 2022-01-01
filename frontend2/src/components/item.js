import ImageUpload from "./imageUpload";
import ItemProperty from "./itemProperty";

const React = require('react')


class Item extends React.Component {
  


  render() {
    return (
      <div>
    <ImageUpload></ImageUpload>
    <ItemProperty></ItemProperty>
      </div>
    );
  }
}
export default  Item;