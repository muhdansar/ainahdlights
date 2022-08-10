import React, {useState} from "react";

const Order = () => {
    const [email, setEmail] = useState("ansar.b.buhari@gmail.com");
    const [nenas, setNenas] = useState("tart nenas");
    const [price, setPrice] = useState(25);
    const [qtyNenas, setQtyNenas] = useState(1);
    const [qtyMakmur, setQtyMakmur] = useState(1);

    const handleNenasChange = (event) => {
        event.preventDefault();
        setQtyNenas(event.target.value)
    }

    const sendNenas = async (event) => {
        event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                item: nenas,
                price: price,
                qty: qtyNenas 
            })
        };
        try {
            const data = await fetch("http://localhost:5001/api/addtocart/tartnenas", requestOptions);

            } catch (error) {
            console.log(error.message);
        }
        setQtyNenas(1);
        alert(qtyNenas + " Nenas Added!");
    };

    const handleMakmurChange = (event) => {
        event.preventDefault();
        setQtyMakmur(event.target.value)
    };

    const sendMakmur = async (event) => {
        event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                item: nenas,
                price: price,
                qty: qtyMakmur 
            })
        };
        try {
            const data = await fetch("http://localhost:5001/api/addtocart/kuihmakmur", requestOptions);

            } catch (error) {
            console.log(error.message);
        }
        setQtyMakmur(1);
        alert(qtyMakmur + " Makmur Added!");
    }

    return (
        <>
        <div>
            <h2 className="menuTitle">Classic Cookies</h2>
                <div className="menu-item">
                    <div>
                        <form onSubmit={sendNenas}>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t39.30808-6/274861880_3152692521614759_1401534695032759285_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=8UG_qNT-hXgAX8EeI2J&tn=uPSiIWIgHEnhzHVt&_nc_ht=scontent.fsin7-1.fna&oh=00_AT-X4xM2J2cQGEOFDZ-bL6hKctKzVxfgkk0pOpnhuJuaSw&oe=62F069A3" alt="Kuih Tart"></img>
                        <h3>Kuih Tart Nenas</h3>
                        <p>All Time Favourite</p>
                        <p>$25/bottle (approx 50pcs)</p>
                        <input onChange={handleNenasChange} type="number" placeholder="1" value={qtyNenas}></input>
                        <button>Add to Cart</button>
                        </form>
                    </div>
                    <div>
                        <form onSubmit={sendMakmur}>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t39.30808-6/274859082_3152693168281361_8699406715775151486_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=njCEukouHl8AX_Xe7To&tn=uPSiIWIgHEnhzHVt&_nc_ht=scontent.fsin7-1.fna&oh=00_AT9y4ax-GAQunSizpq7CAoUvsJUWlbK39XLu7i6kodTILA&oe=62F0BF55" alt="Kuih Makmur"></img>
                        <h3>Kuih Makmur Ball</h3>
                        <p>Classic Re-imagined</p>
                        <p>$25/bottle (approx 50pcs)</p>
                        <input onChange={handleMakmurChange} type="number" placeholder="1" value={qtyMakmur}></input>
                        <button>Add to Cart</button>
                        </form>
                     </div>
                    <div>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t39.30808-6/274936350_3152692868281391_4505965178787684125_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Q4lSo-StgpoAX9yOg3E&tn=uPSiIWIgHEnhzHVt&_nc_ht=scontent.fsin7-1.fna&oh=00_AT97QdXziilKp5UyHEnSat3MYTq5xqW1pD7ximJ_AuddMQ&oe=62F11B14" alt="Suji Badam"></img>
                        <h3>Suji Badam</h3>
                        <p>Milk Lovers Unite</p>
                        <p>$25/bottle (approx 50pcs)</p>
                        <input type="number" placeholder="1"></input>
                        <button>Add to Cart</button>
                    </div>
                </div>
        </div>
        <div>
        <h2 className="menuTitle">Cakes and Tiramisu</h2>
                <div className="menu-item">
                    <div>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t1.18169-9/10291865_1480656922151669_3401718801988810187_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=rYPR-0u_ai4AX_pttCv&_nc_ht=scontent.fsin7-1.fna&oh=00_AT9dLuM4oddVyj6Fl-1eKnvPEiOENnU8m-zn73lxDLVa2w&oe=63101B10" alt="Oreo Cheesecake"></img>
                        <h3>Oreo CheeseCake</h3>
                        <p>All Time Favourite</p>
                        <p>$25</p>
                        <input type="number" placeholder="1"></input>
                        <button>Add to Cart</button>
                    </div>
                    <div>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t1.18169-9/10388134_1480658608818167_4224853537950127842_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kgW-iHpzL-UAX8sxghr&tn=uPSiIWIgHEnhzHVt&_nc_ht=scontent.fsin7-1.fna&oh=00_AT97lnnkjVn0fdc9VS7jsw6ujpbVFUJq9YpcCZwtfHwJYQ&oe=63118D4B" alt="Chocolate Tiramisu"></img>
                        <h3>Chocolate Tiramisu</h3>
                        <p>You Can't Go Wrong With This</p>
                        <p>$25</p>
                        <input type="number" placeholder="1"></input>
                        <button>Add to Cart</button>
                     </div>
                    <div>
                        <img src="https://scontent.fsin7-1.fna.fbcdn.net/v/t1.18169-9/10252061_1480656208818407_8209153809448754843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=IO8wFvL7J4wAX-1SJoX&_nc_ht=scontent.fsin7-1.fna&oh=00_AT-C78Uxfq5BOYklzpk86qWvJJmqwIRgp57I2CmHc7toZg&oe=631254B4" alt="Mint Choco Cheesecake"></img>
                        <h3>Mint Choco Cheesecake</h3>
                        <p>For all you toothpaste lovers :P</p>
                        <p>$25</p>
                        <input type="number" placeholder="1"></input>
                        <button>Add to Cart</button>
                    </div>
                </div>
        </div>
        <button>Go to Cart</button>
        </>
    )
}

export default Order;
