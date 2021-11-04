import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";


const useCart = () => {
    const { user } = useFirebase()
    const { uid } = user;
    const [pakages, setPakages] = useState([]);


    const addToCart = (plan) => {


        console.log('clicked', plan)
        const isHave = pakages.find(pakage => pakage._id === plan._id);
        delete plan._id;
        plan.uid = uid;
        plan.status = "pending";

        if (isHave) {
            alert("Add to your offer");
        } else {
            fetch("https://tranquil-springs-05915.herokuapp.com/addtocart", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(plan),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        const newSelection = [...pakages, plan];
                        setPakages(newSelection);
                    }
                });
        }
    };
    const deleteSingleOrder = id => {
        fetch(`https://tranquil-springs-05915.herokuapp.com/deleteCart/${id}`, {

            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const selectAfterRemove = pakages.filter(
                        (pakage) => pakage._id !== id
                    );
                    setPakages(selectAfterRemove);
                } else {
                    alert("something went wrong!!");
                }
            });
    };

    return {
        pakages,
        setPakages,
        addToCart,
        deleteSingleOrder
    }
}
export default useCart;