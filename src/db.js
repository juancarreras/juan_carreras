/* React.useEffect(() => {

    const products = [
      {
        title: "Heladera",
        description: "La heladera Sigma 2F1600B está diseñada para tener una experiencia confortable y útil. En su interior, cuenta con estantes regulables con borde antiderrame; cajón para frutas y verduras y crisper especial para fiambres y quesos.",
        image: "https://http2.mlstatic.com/D_NQ_NP_618689-MLA40492791673_012020-O.jpg",
        price: 70000,
        categoryId: "Electrodomesticos",
      },
      {
        title: "Lavarropas",
        description: " El lavarropas Drean Concept 5.05 es de carga superior, equipado con una tapa transparente con bloqueo en el centrifugado que permite visualizar el proceso de lavado y mantiene cerrado el lavarropas durante el centrifugado para mayor protección.",
        image: "https://images.fravega.com/f300/b2b41234345073e24bbec07b45ed84fe.jpg",
        price: 45000,
        categoryId: "Electrodomesticos",
      },
      {
        title: "Lavavajilla",
        description: "El lavavajillas Drean Dish 15.2 DTB posee un elegante diseño en color blanco que se amolda a cualquier cocina. Por otro lado, cuenta con cestos separadores para acomodar la vajilla y utensilios de cocina a gusto. Su capacidad es para 15 cubiertos. ",
        image: "https://www.lg.com/ar/images/lavavajillas/d1452wf/gallery/gallery-large-D1425LF-4.jpg",
        price: 50000,
        categoryId: "Electrodomesticos",
      },
      {
        title: "Iphone 11",
        description: "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas ",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022219953",
        price: 200000,
        categoryId: "Tecnologia",
      },
      {
        title: "Smart tv Samgung 50 pulgadas",
        description: "Mediante sus entradas HDMI podés conectar reproductores de audio y video; consolas de juegos y notebooks. Su gran capacidad de transmisión de datos permite disfrutar de imágenes en alta definición y un sonido de gran fidelidad.",
        image: "https://images.samsung.com/is/image/samsung/latin-uhd-tu8000-un50tu8000pxpa-frontblack-229165727?$720_576_PNG$",
        price: 60000,
        categoryId: "Tecnologia",
      },
      {
        title: "Laptop Lenovo",
        description: "La notebook HP 15-CW1500LA posee un diseño elegante, delgado y sofisticado, con un acabado liso completamente metalizado. ",
        image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MzAzNDQ1fGltYWdlL3BuZ3xoNjYvaDY2LzEwNzU3MjQxNTAzNzc0LnBuZ3xjMzU3NWY4OGEyYjYzYTEwOGFlYzhiNWJhODEwYzA1MTlkNDYxODI3ZGQxM2IzYTRhYmY4M2YzY2NjYjhhOGJj",
        price: 120000,
        categoryId: "Tecnologia",
      },
      {
        title: "Cuchilla eskiltuna",
        description: "ESKILSTUNA - Tradición en Cuchillería",
        image: "https://image.shutterstock.com/image-photo/sharp-not-touch-chefs-kitchen-260nw-1281029980.jpg",
        price: 600,
        categoryId: "Bazar",
      },
      {
        title: "Cacerola Essen",
        description: "Estas Cacerolas son las más vendidas de nuestra línea de productos y gracias a los complementos que hemos desarrollado, permiten disfrutar de todas las funciones y beneficios de las piezas Essen.",
        image: "https://www.essen.com.ar/contenido/objetos/1/Cacerola%20Terra.jpg",
        price: 20000,
        categoryId: "Bazar",
      },
      {
        title: "Kit de cubiertos",
        description: "El asador siempre es el último que se sienta a la mesa. Pero para garantizar que los invitados también traten al asado con respeto, nada mejor que elegir los cubiertos adecuados para eso",
        image: "https://http2.mlstatic.com/D_NQ_NP_605798-MLA41661555999_052020-O.jpg",
        price: 2000,
        categoryId: "Bazar",
      },
    ]

    const db = getFirestore();
    const ordersCollection = db.collection("items");

    products.forEach((product) => {
      ordersCollection 
        .add(product)
        .then((docRef) => console.log("Producto agregado exitosamente: ", docRef.title))
        .catch((error) => console.log(error));
    });
  }, []);
 */
