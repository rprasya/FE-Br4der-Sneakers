import Foto from "../assets/imgSlider/sara-kurfess-_VfvnjbKFu4-unsplash.jpg";
import Footer from "../components/Footer";

const Product = () => {
    return (
        <>
        <section className="container flex justify-between items-center mb-10 columns-2 gap-20 p-20">
            {/* Tag Button */}
            <div className="container mx-auto items-center">
                <button class="bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent rounded-xl mr-5">
                    TAG 1
                </button>
                <button class="bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent rounded-xl mr-5">
                    TAG 2
                </button>
                <button class="bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent rounded-xl mr-5">
                    TAG 3
                </button>
                <img src={Foto} alt="" className="rounded-lg mt-5"/>
                <div className="container justify-between grid grid-cols-2 gap-5 mt-5">
                    <h1 className="text-2xl font-semibold">
                        Product Name
                    </h1>
                    <h1 className="text-2xl text-right font-semibold text-[#F80F00]">
                        120 Stock
                    </h1>
                </div>
                <div className="container justify-between grid grid-cols-none mt-5">
                    <h1 className="text-4xl font-semibold">
                        Rp500.000
                    </h1>
                </div>
            </div>
            <div className="container mx-auto items-center">
                <h1 className="text-xl font-semibold">Informasi Produk</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate autem ipsa ex ipsum possimus impedit delectus omnis illo magnam alias, dolores commodi doloremque vero sint aperiam, sunt esse consectetur? Obcaecati sint consectetur, dignissimos, neque nemo quis odio dolor autem recusandae possimus, eius quas cum expedita repellat animi. Eum modi recusandae illum, labore sint consequatur obcaecati enim similique, praesentium a distinctio quasi, velit natus asperiores atque voluptatem cum eius nam quisquam ad dolore aut nulla. Ipsa ea aspernatur quia facilis magnam exercitationem amet. Vero vitae dolores error nam quos totam itaque dolor architecto tempore quod, perferendis voluptate. Rem, blanditiis exercitationem?</p>
                <br />
                <div className="mt-9">
                    <h1 className="text-xl font-semibold">Ukuran Sepatu</h1>
                </div>
                <div className="flex flex-wrap gap-3 tablet-gap:4 mt-5">
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    38</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    39</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    40</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    41</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    42</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    43</button>
                    <button selected="true"
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    44</button>
                    <button
                    className="flex min-h-[30px] min-w-[50px] bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent items-center justify-center rounded-lg">
                    45</button>
                </div>
                <div className="mt-9">
                    <h1 className="font-semibold text-xl">Atur Jumlah</h1>
                </div>
                <div className="flex flex-wrap mx-auto gap-5 mt-5">
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="bg-white hover:bg-gray-200 border rounded-s-lg p-3 h-11">
                        <svg class="w-3 h-3 text-gray-900 dark:text-[#F80F00]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-white hover:bg-gray-200 border-[#F80F00] h-11 font-semibold text-center text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="bg-white hover:bg-gray-200 border rounded-e-lg p-3 h-11">
                        <svg class="w-3 h-3 text-gray-900 dark:text-[#F80F00]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                    <button
                    className="bg-transparent hover:bg-[#F80F00] text-[#F80F00] hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent rounded-lg">
                    Tambah Keranjang</button>
                    <button
                    className="bg-[#F80F00] hover:bg-[#962f2f] text-white hover:text-white py-2 px-4 border border-[#F80F00] hover:border-transparent rounded-lg">
                    Beli Sekarang</button>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Product;