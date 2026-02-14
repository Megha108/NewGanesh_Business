import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SEO_CONTENT } from "../../data/seoContent.js";
import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";
import Products from "./products.jsx";

const ProductMain = () => {
  const { purpose, slug } = useParams();

  // Find SEO config if it exists
  let seoConfig = null;
  if (purpose && slug && SEO_CONTENT[purpose]) {
    // Check all entries in this purpose
    for (const [key, item] of Object.entries(SEO_CONTENT[purpose])) {
      if (slug.startsWith(item.slugPrefix)) {
        const localityFromSlug = slug.replace(item.slugPrefix, "");
        if (item.localities.includes(localityFromSlug)) {
          const capitalizedLocality = localityFromSlug.charAt(0).toUpperCase() + localityFromSlug.slice(1);

          seoConfig = {
            ...item,
            title: item.title.replace("{locality}", capitalizedLocality),
            h1: item.h1.replace("{locality}", capitalizedLocality),
            description: item.description.replace("{locality}", capitalizedLocality),
            locality: capitalizedLocality
          };
          break;
        }
      }
    }
  }

  // If we have a purpose/slug but no config, we might want to canonicalize or handle it
  // For now, if it's a valid SEO page, use its data; otherwise, default to generic.

  return (
    <>
      <Helmet>
        {seoConfig ? (
          <>
            <title>{seoConfig.title}</title>
            <meta name="description" content={seoConfig.description} />
            <link rel="canonical" href={`https://www.newganeshseeds.com/${purpose}/${slug}`} />
          </>
        ) : (
          <>
            <title>Premium Agriculture Seeds | New Ganesh Seeds Products</title>
            <meta name="description" content="Discover our wide range of high-quality agriculture seeds including Rajka, Lucerne, Bajra, and more. Quality seeds for better crop yield." />
            <link rel="canonical" href="https://www.newganeshseeds.com/products" />
          </>
        )}
      </Helmet>

      {/* All site content sits ABOVE bg in a new stacking context */}
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <div className="relative mt-10">
          <Products seoConfig={seoConfig} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductMain;