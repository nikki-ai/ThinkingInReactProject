import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import FeaturesItem from './FeaturesItem';

class Features extends React.Component {

    render() {
        
        return( 
            <div>
              <h2>Customize your laptop</h2>
            <FeaturesItem
            selected={this.props.selected} 
            updateFeature={this.props.updateFeature} 
            USCurrencyFormat={this.props.USCurrencyFormat}
            />
            </div>
        )
        }
}

export default Features;