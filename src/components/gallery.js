import React, { Component } from "react";
import '../styles/gallery.css'
import Lightbox from "../components/lightbox"
import StackGrid, { transitions, easings  } from "react-stack-grid";

const images = 
[{
        src:"https://drscdn.500px.org/photo/290721445/q%3D80_m%3D1000/v2?webp=true&sig=1a17e67f89d99ed46ae679a9fb69cd35a9392b25fe3ad21639232b5f30bee374",
},

{
        src:"https://drscdn.500px.org/photo/289268969/q%3D80_m%3D1000/v2?webp=true&sig=2236d9733bdd5311ab1f431e812cc89bbc02ff441372005a5401a124ce3ad515",
},

{
        src:"https://drscdn.500px.org/photo/289274803/q%3D80_m%3D1000/v2?webp=true&sig=e9386d30aa7631019c858bc3250e01a768313a1f779b9c6c396866152e922030",
},
{
        src:"https://drscdn.500px.org/photo/289285621/q%3D80_m%3D1000/v2?webp=true&sig=df16f0ffacd159279db0c7a9e37bc4d1a726171f3c009e94a2bb2e03cf9adb4d",
},
{
        src:"https://drscdn.500px.org/photo/289454063/q%3D80_m%3D1000/v2?webp=true&sig=8c3edd12a1f678682e05e9435d21bfdd89780b056f7a15534a5ae530ec5cc2e7",
},
{
        src:"https://drscdn.500px.org/photo/289453931/q%3D80_m%3D1000/v2?webp=true&sig=478e8a92a352e68cc76c40e19e931581d83c91b510583d2ed44242a725acaa58",
},
{
        src:"https://drscdn.500px.org/photo/289418863/q%3D80_m%3D1000/v2?webp=true&sig=96034731c5cd57d00d3f242ccf17f6187ef5d8c4d7e32c9804b71877ac847292",
},
{
	src:"https://drscdn.500px.org/photo/290725145/q%3D80_m%3D1000/v2?webp=true&sig=eae48629214ba2eea69306d7157b6f080fe54f775f5fba134e53d34b15d1044b",

},
{
	src:"https://drscdn.500px.org/photo/290421847/q%3D80_m%3D1000/v2?webp=true&sig=d5a3987cdd0da7a6632b1d07494dd3b723227fbbb9bcd5a31992c91ffcc8ffe5",

},
{
	src:"https://drscdn.500px.org/photo/289271619/q%3D80_m%3D1500/v2?webp=true&sig=ee16a48a84547f7f71c4bbc5a29d45ccc76ebbaf6f5c372f1d05eb0f7becfe7a",

},
{
	src:"https://drscdn.500px.org/photo/289280063/q%3D80_m%3D1000/v2?webp=true&sig=32f1a6e5bc1d611b79a44931600973e0bcc14ba4e71b9052cade74328caa29f7",

},
{
	src:"https://drscdn.500px.org/photo/289266121/q%3D80_m%3D2000/v2?webp=true&sig=a90a63d46af2ac51da2f99aed8dc453ca750510f9446f697a77cd7577ea3ab37"
},
{
	src:"https://drscdn.500px.org/photo/289283197/q%3D80_m%3D1500/v2?webp=true&sig=129aa898ade3705f47682de19afdc556bec675593c7613963d9b0f89a73e940a"
}
];

const transition = transitions.scaleDown;


class Gallery extends Component {

	constructor() {
		super();
		// this.state = {showLightbox:false}
		this.clickedImage = false;
	}

        render() {
                return (
			<div className="gallery-container">
			 <StackGrid  
				columnWidth={350}
				duration={600}
				gutterWidth={5}
				gutterHeight={40}
				easing={easings.cubicOut}
				appearDelay={80}
				duration={1000}
				monitorImagesLoaded={true}
				appear={transition.appear}
				appeared={transition.appeared}
				enter={transition.enter}
				entered={transition.entered}
				leaved={transition.leaved}
				>
						{images.map((obj, index) => (
						<figure
							key={obj.src}
							className="image"
						>
							<img src={obj.src} alt={obj.label} onClick={this.showLightbox.bind(this, obj, index)}/>
							<figcaption>{obj.label}</figcaption>
						</figure>
						))}
						<Lightbox ref={child => {this.child = child}} {...this.props} images={images} />

				</StackGrid>
				
			</div>
					
                );
	}
		
	showLightbox (clickedImage, clickedImageIndex) {
		console.log('show lightbox' , clickedImage);
		console.log('clickedIndex ' + clickedImageIndex)
		this.child.handleShow(clickedImage, clickedImageIndex);       
	}
}
export default () => (
        // <Grid images={IMAGES} enableImageSelection='false' rowHeight='300px'/>
        <Gallery></Gallery>
)

// export default RealWorld;

