import { UserContext } from '../Store'
import Product from './Product'
import React, { useContext, useEffect, useRef, useState } from 'react'
export default function Shop() {
    let store = useContext(UserContext)
    const [topicsList, settopicsList] = useState([])
    const [search, setSearch] = useState("");
    const TopicOnClick = (e, name) => {
        if (e.currentTarget.classList.contains('Topic')) {

            e.currentTarget.classList.remove("Topic")
            e.currentTarget.classList.add("targetTopic")
            let temp = store.searchList
            temp.add(name)
            store.setsearchList(temp)
        }
        else {
            e.currentTarget.classList.remove("targetTopic")
            e.currentTarget.classList.add("Topic")
            let temp = store.searchList
            temp.delete(name)
            store.setsearchList(temp)
            // console.log(store.searchList)
        }

    }
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        if (ref.current.scrollLeft === 0) {

        }
    };
    let handleClick = () => {
        let option;
        let category = [];

        const products = [
            {
              "name": "Pineapple",
              "imgUrl": "https://lh3.googleusercontent.com/d/15tmniwp0w_i3hE0lpSXHe_fGkyOeLdNZ",
              "category": "fruit",
              "text": "1kg",
              "price": 100,
              "stock": 5
            },
            // {
            //   "name": "Avocado",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/12lUzabM28_qux2GsH6bHboLoyvDIYAqR",
            //   "category": "fruit",
            //   "text": "1kg",
            //   "price": 350,
            //   "stock": 5
            // },
            // {
            //   "name": "Papaya",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1tlyAsETh-E_WRxpDe1AIH0oLfPySG1iw",
            //   "category": "fruit",
            //   "text": "1kg",
            //   "price": 100,
            //   "stock": 5
            // },
            {
              "name": "Apple",
              "imgUrl": "https://lh3.googleusercontent.com/d/14T5RJIlX7mMg0KNV9KDzlRXyKVm0TpEB",
              "category": "fruit",
              "text": "1kg",
              "price": 140,
              "stock": 5
            },
            // {
            //   "name": "Kevin",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1Hw32BcdFSzXW-4a0xmbB5tdGL2Gh4La2",
            //   "category": "fruit",
            //   "text": "1kg",
            //   "price": 500,
            //   "stock": 5
            // },
            {
              "name": "Orange",
              "imgUrl": "https://lh3.googleusercontent.com/d/1QV1_4vszU642YAdxkpzk2zRB2JygsVgN",
              "category": "fruit",
              "text": "1kg",
              "price": 90,
              "stock": 5
            },
            {
              "name": "Pear",
              "imgUrl": "https://lh3.googleusercontent.com/d/1kzjy3WMAwCVBq4YuSvn1SariZeSikFeu",
              "category": "fruit",
              "text": "1kg",
              "price": 100,
              "stock": 5
            },
            {
              "name": "Strawberry",
              "imgUrl": "https://lh3.googleusercontent.com/d/1qP_oRTSiVdDkh3g7Qe7gQz7t-PvvT93h",
              "category": "fruit",
              "text": "1kg",
              "price": 200,
              "stock": 5
            },
            // {
            //   "name": "Butter",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1_VgJHS8ntOhBMY7CxHSP6XMUCJ5HPU-a",
            //   "category": "Dairy",
            //   "text": "100gm",
            //   "price": 80,
            //   "stock": 5
            // },
            // {
            //   "name": "Cheese",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/17vceSifkEXrL79EFq0s2Iw14qwi5BaUQ",
            //   "category": "Dairy",
            //   "text": "100m",
            //   "price": 100,
            //   "stock": 5
            // },
            // {
            //   "name": "Milk",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1zdrl7LVK4U0zaxZo8YIMSpcuaRf7Ce8m",
            //   "category": "Dairy",
            //   "text": "1lt",
            //   "price": 30,
            //   "stock": 5
            // },
            // {
            //   "name": "Yogurt",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1S76srpl-UOMft0uuiFgFm6qM_K8vsK57",
            //   "category": "Dairy",
            //   "text": "1kg",
            //   "price": 180,
            //   "stock": 5
            // },
            {
              "name": "Tomatoes",
              "imgUrl": "https://lh3.googleusercontent.com/d/1ikAT_Sh1UCmZqwmYKOcC3BRziY1E_H_x",
              "category": "Vegetables",
              "text": "1kg",
              "price": 60,
              "stock": 5
            },
            {
              "name": "Beets",
              "imgUrl": "https://lh3.googleusercontent.com/d/1fNmqiguOtpKQ5PEFBb4vA9SfsOGWHiKE",
              "category": "Vegetables",
              "text": "1kg",
              "price": 50,
              "stock": 5
            },
            {
              "name": "Broccoli",
              "imgUrl": "https://lh3.googleusercontent.com/d/1Dj2PpIUG-muEad0X5bRkJQlMXyGMgevg",
              "category": "Vegetables",
              "text": "1kg",
              "price": 140,
              "stock": 5
            },
            {
              "name": "Cabbage",
              "imgUrl": "https://lh3.googleusercontent.com/d/1udl2u227KYFBHMnqJVt4w8CfcdScRYTV",
              "category": "Vegetables",
              "text": "1kg",
              "price": 35,
              "stock": 5
            },
            {
              "name": "Cauliflower",
              "imgUrl": "https://lh3.googleusercontent.com/d/1JufpVw5ByJ-u5VEL_-8QPXss_58VanTE",
              "category": "Vegetables",
              "text": "1kg",
              "price": 50,
              "stock": 5
            },
            {
              "name": "Garlic",
              "imgUrl": "https://lh3.googleusercontent.com/d/1lOvPU-AEGSimcvj-8L0W3Ol0YZTJYTPN",
              "category": "Vegetables",
              "text": "1kg",
              "price": 135,
              "stock": 5
            },
            {
              "name": "Onions",
              "imgUrl": "https://lh3.googleusercontent.com/d/1PtG1nyaYpu7F2IaLTNjNX5gisvyQvCtv",
              "category": "Vegetables",
              "text": "1kg",
              "price": 70,
              "stock": 5
            },
            {
              "name": "Potatoes",
              "imgUrl": "https://lh3.googleusercontent.com/d/14HgTnO5qv_jnPJtFi4pwxer089CVZC4g",
              "category": "Vegetables",
              "text": "1kg",
              "price": 45,
              "stock": 5
            },
            // {
            //   "name": "Popcorn",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1ufmCohoFc_R9qRg1VPBAlgJzp8Y-hkyW",
            //   "category": "Snacks",
            //   "text": "100gm",
            //   "price": 30,
            //   "stock": 5
            // },
            // {
            //   "name": "Almonds",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1qGXAYUk6C1MbIRxFMa7NGgeQ_7Nuc4tL",
            //   "category": "Snacks",
            //   "text": "1kg",
            //   "price": 500,
            //   "stock": 5
            // },
            // {
            //   "name": "Candy",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/148f7NYrW9SA6_R-sEmJ0KeOh8yKm8seG",
            //   "category": "Snacks",
            //   "text": "1kg",
            //   "price": 500,
            //   "stock": 5
            // },
            // {
            //   "name": "Cookies",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1mh5MflGN99eOQN5fJ1mG0V8ENouyWGhN",
            //   "category": "Snacks",
            //   "text": "300gm",
            //   "price": 30,
            //   "stock": 5
            // },
            // {
            //   "name": "Sponges",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/19woAM-ubpDCTluz-QXAL6QNo5hadJP47",
            //   "category": "Household",
            //   "text": "1kg",
            //   "price": 80,
            //   "stock": 5
            // },
            // {
            //   "name": "Batteries",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1mwNpal1NWNWQv9L7Tjs7X7KCVp2V-Hm7",
            //   "category": "Household",
            //   "text": "1PAck",
            //   "price": 30,
            //   "stock": 5
            // },
            // {
            //   "name": "soap",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1nQaFvgKiNG2sFo31ThgzhVRHeUBcc3Gr",
            //   "category": "Household",
            //   "text": "1kg",
            //   "price": 100,
            //   "stock": 5
            // },
            // {
            //   "name": "Napkins",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1swmRqzsCXBtzJTt9tEqOEbkjRsskrL4m",
            //   "category": "Household",
            //   "text": "1box",
            //   "price": 20,
            //   "stock": 5
            // },
            // {
            //   "name": "conditioner",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1ch9aTbVLNAoxc2qVbHVN52-lJmjsBjPg",
            //   "category": "Household",
            //   "text": "1lt",
            //   "price": 200,
            //   "stock": 8
            // },
            // {
            //   "name": "Shampoo",
            //   "imgUrl": "https://lh3.googleusercontent.com/d/1F6QFxCYb_1kCDz90wVp1rLbGV3utzUSC",
            //   "category": "Household",
            //   "text": "1lt",
            //   "price": 150,
            //   "stock": 7
            // }
        ]

        store.setSearchcartList(products)



        if (store.searchList.has("All")) {
            option = {
                all: true,
                search: search,
                category: category
            }
        }
        else {
            store.searchList.forEach(element => {
                category.push(element)
            });
            option = {
                all: false,
                search: search,
                category: category
            }
        }
        // fetch(process.env.REACT_APP_API_KEY + "getProducts", {
        //     method: "POST",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(option),
        // }).then(
        //     (res) => {
        //         return res.json();
        //     }
        // ).then((data) => {
        //     console.log(data)
        //     if (data.status) {
        //         store.setSearchcartList(data.products)
        //     }
        //     else {
        //         alert("error")
        //     }
        // })
        //     .catch((err) => {
        //         console.log(err)
        //         alert("error")
        //     })
    }


    let handleSort = (str) => {
        let product = store.SearchcartList;
        if (str === "lowToHighi") {
            let newProduct = [...product].sort((a, b) => a.price - b.price);
            // console.log(newProduct);
            store.setSearchcartList(newProduct);
        }
        else if (str === "highiToLow") {
            let newProduct = [...product].sort((a, b) => b.price - a.price);
            // console.log(newProduct);
            store.setSearchcartList(newProduct);
        }
        else if(str==="Name"){
            let newProduct = [...product].sort((a, b) => a.name.localeCompare(b.name));
            // console.log(newProduct);
            store.setSearchcartList(newProduct);
        }

    }
    useEffect(() => {
        // settopicsList(["All", "Dairy", "fruit", "Household", "Snacks", "Vegetables"]);
        settopicsList(["Vegetables", "fruit"]);
        handleClick();
    }, []);

    return (
        <div className='ShopMainPAge'>
            <div className="Sticky">
                {/* <div className="searchBox">
                    <input type="text" name="Search" id="Search" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <button className='SearchBtn' onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div> */}

                {/* <div className="topic">

                    <div className="boxTopic">
                        <span className='leftBtnTopic' onClick={() => scroll(-30)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </span>
                        <div className="ScrollTipicBox" ref={ref}>

                            {topicsList.map((ele, index) => {
                                let flag = store.searchList.has(ele);
                                return <span key={index} onClick={(event) => { TopicOnClick(event, ele) }} className={(flag) ? "topics targetTopic" : "topics Topic"}>{ele}</span>
                            })}
                        </div>
                        <span className='rightBtnTopic' onClick={() => scroll(30)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </span>
                    </div>

                </div> */}
                {/* <button className="btn btn-Primary  " type="button" id="Apply" aria-haspopup="true" aria-expanded="false" onClick={handleClick}>
                    Apply
                </button> */}
                {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-dark " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => {
                            handleSort("lowToHighi")
                        }}>Price Low to High</button>
                        <button className="dropdown-item" type="button"
                            onClick={() => {
                                handleSort("highiToLow")
                            }}
                        >Price High to low</button>
                        <button className="dropdown-item" type="button"
                            onClick={() => {
                                handleSort("Name")
                            }}
                        >Sort by Name</button>

                    </div>
                </div> */}

            </div>

            <div style={{marginTop : "15px"}}>
            <p style={{ fontWeight : "bold"}}>
                Order Now! 📞 +91 8015002546 Delivery Available in Madurai 🚚
            </p>
                {/* Call To Order Now. +91 8015002546 available place madurai. */}
            </div>
            <div className='ShopPage'>

                <div className="ShopPageSecondSection">
                    <Product Margin={{ "margin": "20px" }} type="Shop" ></Product>
                </div>
            </div>
        </div>
    )
}
