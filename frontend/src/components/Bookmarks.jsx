import { useEffect, useState } from "react";
import API from "../services/api";

function Bookmarks() {

    const [bookmarks, setBookmarks] =
        useState([]);

    useEffect(() => {

        fetchBookmarks();

    }, []);

    const fetchBookmarks = async () => {

        try {

            const email =
    localStorage.getItem(
        "user_email"
    );

const response =
    await API.get(
        `/bookmarks?email=${email}`
    );

            setBookmarks(
                response.data
            );

        }

        catch(error) {

            console.log(error);

        }
    };

    const deleteBookmark = async (
    id
) => {

    try {

        await API.delete(
            `/bookmarks/${id}`
        );

        fetchBookmarks();

    }

    catch(error) {

        console.log(error);

    }
};

    return (

        <div>

            <h1>
                Saved Bookmarks
            </h1>

            {bookmarks.map((bookmark) => (

    <div key={bookmark.id}>

        <button
            onClick={() =>
                deleteBookmark(
                    bookmark.id
                )
            }
        >
            Delete
        </button>

        <h3>
            {bookmark.title}
        </h3>

        <p>
            {bookmark.source}
        </p>

        <a
            href={bookmark.url}
            target="_blank"
            rel="noreferrer"
        >
            Read
        </a>

    </div>

))}

           

        </div>

    );
}

export default Bookmarks;