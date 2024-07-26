import { createContext, useState } from 'react';

const PageContext = createContext();

const PageProvider = ({ children }) => {
    const [page, setPage] = useState(1);

    function nextPage() {
        setPage(page%6+1);
    }

    function prevPage() {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    }

    return (
        <PageContext.Provider value={{ page, setPage, nextPage, prevPage }}>
            {children}
        </PageContext.Provider>
    );
}

export { PageContext, PageProvider };
