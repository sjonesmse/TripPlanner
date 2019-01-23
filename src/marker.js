const mapbox = require('mapbox-gl');

const newMarker = (type, coordArr) => {
    const div = document.createElement('div');

    if (type === "Restaurant") {
        div.style.width = '32px';
        div.style.height = '39px';
        // div.style.backgroundColor = "red"
        div.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

    }
    else if (type === "Activity") {
        div.style.width = '32px';
        div.parastyle.height = '39px';
        div.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

    }
    else if (type === "Hotel") {
        div.style.width = '32px';
        div.style.height = '39px';
        div.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
    }
    return new mapbox.Marker(div).setLngLat(coordArr);
};


module.exports = newMarker;
