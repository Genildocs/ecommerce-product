import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import image_1 from "../assets/images/image-product-1.jpg";
import image_2 from "../assets/images/image-product-2.jpg";
import image_3 from "../assets/images/image-product-3.jpg";
import image_4 from "../assets/images/image-product-4.jpg";

export default function Sliders({ isMobile }) {
  return (
    <div>
      {isMobile && (
        <CarouselComponent>
          <CarouselItemsDirective>
            <CarouselItemDirective
              template={`'<figure class="img-container"><img src=${image_1} alt="cardinal" style="height:100%;width:100%;" /></figure>'`}
            />
            <CarouselItemDirective
              template={`'<figure class="img-container"><img src=${image_2} alt="cardinal" style="height:100%;width:100%;" /></figure>'`}
            />
            <CarouselItemDirective
              template={`'<figure class="img-container"><img src=${image_3} alt="cardinal" style="height:100%;width:100%;" /></figure>'`}
            />
            <CarouselItemDirective
              template={`'<figure class="img-container"><img src=${image_4} alt="cardinal" style="height:100%;width:100%;" /></figure>'`}
            />
          </CarouselItemsDirective>
        </CarouselComponent>
      )}
    </div>
  );
}