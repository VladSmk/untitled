import {createContext, useState} from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // selectedItems will store objects in the format {material:"", name:"", number:""}
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedExplosives, setSelectedExplosives] = useState([]);

    function deleteData () {
        setSelectedExplosives([]);
        setSelectedItems([]);
    }

    function plusItem(newItem) {
        let itemExists = false;

        const updatedItems = selectedItems.map((item) => {
            if (newItem.material === item.material && newItem.name === item.name) {
                itemExists = true;
                return {...item, number: item.number + 1};
            }
            return item;
        });

        if (!itemExists) {
            updatedItems.push({material: newItem.material, name: newItem.name, number: 1});
        }

        setSelectedItems(updatedItems);
    }


    function minusItem(item) {
        const updatedItems = selectedItems.reduce((acc, currentItem) => {
            if (item.material === currentItem.material && item.name === currentItem.name) {
                if (currentItem.number > 1) {
                    acc.push({...currentItem, number: currentItem.number - 1});
                }
            } else {
                acc.push(currentItem);
            }
            return acc;
        }, []);

        setSelectedItems(updatedItems);
    }

    const getItemCount = (material, name) => {
        const item = selectedItems.find(i => i.material === material && i.name === name);
        return item ? item.number : 0;
    };

    return (
        <DataContext.Provider value={{selectedExplosives, setSelectedExplosives, selectedItems, setSelectedItems, deleteData, plusItem, minusItem, getItemCount}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider};