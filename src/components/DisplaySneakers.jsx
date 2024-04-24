/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";

const DisplaySneakers = () => {
  return (
    <>
      <div className="flex flex-col min-h-[500px] items-center justify-center mt-16 gap-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:cols-3 gap-16">
          {/* Card */}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/16/65/22/47/16652247_32587810_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">Adidas</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 1.360.000</div>
                {/* Product Name */}
                <div className="product-title">Samba OG "White/Black"</div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/19/52/47/28/19524728_43509670_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">New Balance</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 2.261.000</div>
                {/* Product Name */}
                <div className="product-title">530 "low-top"</div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/22/50/01/64/22500164_52683718_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">Asics</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 2.893.000</div>
                {/* Product Name */}
                <div className="product-title">GEL-1130 "Shark Skin"</div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4*/}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/20/98/60/68/20986068_50971806_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">Puma</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 1.186.000</div>
                {/* Product Name */}
                <div className="product-title">
                  Palermo OG "Silver Sky/Cayenne Pepper/Gum"
                </div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/21/51/63/35/21516335_51452125_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">Asics</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 3.194.000</div>
                {/* Product Name */}
                <div className="product-title">
                  Gel Lyte V "Re:Collaboration"
                </div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8 mb-5">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card  6 */}
          <div className="card">
            {/* img */}
            <img
              className="img-card p-5"
              src="https://cdn-images.farfetch-contents.com/23/22/70/44/23227044_53331342_1000.jpg"
              alt=""
            />

            {/* Tag & Stock  */}
            <div className="flex flex-col gap-3 py-3 px-5">
              <div className="grid grid-cols-2 items-center gap-3">
                {/* 
                                <div className="text-sm text-end font-semibold line-through text-gray-500">Rp500.000</div>
                                <div className="text-xl font-semibold text-red-700">60%</div>
                                    */}
                <button className="tag">New Balance</button>
                <div className="text-sm items-center text-end font-bold opacity-85">
                  120 Stock
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                {/* Price Name */}
                <div className="price">Rp 5.202.000</div>
                {/* Product Name */}
                <div className="product-title">X Kith 1906R "Black"</div>
                {/* Tag
                            <div className="flex items-center gap-2 mt-5">
                                <button className="tag">
                                    Adidas
                                </button>
                                <button className="tag">
                                    Low
                                </button>
                            </div> */}

                {/* Atc & Buy Now */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  <button className="primary-button">Beli Sekarang</button>
                  <button className="secondary-button">Keranjang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-16">
          <button className="secondary-button px-8">Muat Lebih Banyak</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplaySneakers;
