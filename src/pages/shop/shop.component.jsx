import React from 'react';
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../component/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;

