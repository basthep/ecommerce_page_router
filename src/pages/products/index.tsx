import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsProps {
  products: Product[];
}

const ProductsPage = ({ products }: ProductsProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-6 pt-28 pb-10">

        <div className="max-w-7xl mx-auto mb-14">
          <h1 className="text-5xl font-bold text-gray-900">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Explore our latest collection of products.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;


export async function getServerSideProps() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error loading products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}