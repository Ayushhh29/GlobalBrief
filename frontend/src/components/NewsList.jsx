import { useEffect, useState } from "react";
import API from "../services/api";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
    Row,
    Col,
    Form,
    Modal,
    Spinner,
    Button,
    InputGroup
} from "react-bootstrap";
import Placeholder from
    "react-bootstrap/Placeholder";
import ReactMarkdown from "react-markdown";

function NewsList() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [loadingNews, setLoadingNews] =
    useState(true);

    const [digest, setDigest] = useState("");
const [digestLoading, setDigestLoading] = useState(false);
const [showDigest, setShowDigest] = useState(false);
const [page, setPage] =
    useState(1);

  useEffect(() => {
    setPage(1);
    fetchNews();
  }, [country, category]);

const fetchNews = async () => {

    try {

        setLoadingNews(true);

        const response =
            await API.get(
                `/news?country=${country}&category=${category}&page=${page}`
            );

        setNews(response.data);

    } catch(error) {

        console.log(error);

    } finally {

        setLoadingNews(false);

    }
};
const loadMoreNews = async () => {

    try {

        const nextPage =
            page + 1;

        const response =
            await API.get(
                `/news?country=${country}&category=${category}&page=${nextPage}`
            );

        setNews([
            ...news,
            ...response.data
        ]);

        setPage(nextPage);

    } catch(error) {

        console.log(error);

    }
};

  const searchArticles = async () => {

    try {

        const response =
            await API.get(
                `/news/search?query=${search}`
            );

        setNews(response.data);
        

    }

    catch(error) {

        console.log(error);

    }
};
const generateDigest = async () => {

    try {

        setDigestLoading(true);

        const response = await API.post(
            "/digest",
            {
                articles: news
            }
        );

        setDigest(
            response.data.digest
        );

        setShowDigest(true);

    } catch(error) {

        console.log(error);

    } finally {

        setDigestLoading(false);

    }
};


  return (
    
<Container className="mt-4">
    
  
  <Row className="mb-4">

    <Col md={5}>

        <InputGroup>

            <Form.Control
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <Button
                onClick={searchArticles}
            >
                Search
            </Button>

        </InputGroup>

    </Col>

    <Col md={3}>

        <Form.Select
            value={country}
            onChange={(e) =>
                setCountry(e.target.value)
            }
        >

            <option value="in">
                India
            </option>

            <option value="us">
                USA
            </option>

            <option value="gb">
                UK
            </option>

            <option value="jp">
                Japan
            </option>

            <option value="au">
                Australia
            </option>

        </Form.Select>

    </Col>

    <Col md={3}>

        <Form.Select
            value={category}
            onChange={(e) =>
                setCategory(e.target.value)
            }
        >

            <option value="general">
                General
            </option>

            <option value="technology">
                Technology
            </option>

            <option value="business">
                Business
            </option>

            <option value="sports">
                Sports
            </option>

            <option value="health">
                Health
            </option>

            <option value="science">
                Science
            </option>

        </Form.Select>

    </Col>

</Row>
<div className="mb-3">

    <Button
        variant="success"
        onClick={generateDigest}
        disabled={digestLoading}
    >

        📰 Generate Daily Digest

    </Button>

    {digestLoading && (

        <Spinner
            animation="border"
            size="sm"
            className="ms-2"
        />

    )}

</div>
      <h2>{country} Headlines</h2>

 {loadingNews ? (

    <Row>

    {[...Array(6)].map(
        (_, index) => (

            <Col
                key={index}
                xs={12}
                md={6}
                className="mb-4"
            >

                <Placeholder
                    as="div"
                    animation="glow"
                >

                    <Placeholder xs={12} />
                    <Placeholder xs={8} />
                    <Placeholder xs={10} />

                </Placeholder>

            </Col>

        )
    )}

</Row>

) : (

   <Row>

    {news.map((article) => (

        <Col
            key={article.url}
            xs={12}
            md={6}
            className="mb-4"
        >

            <NewsCard
                article={article}
            />

        </Col>

    ))}
    <div className="text-center mt-4">

    <Button
        variant="primary"
        onClick={loadMoreNews}
    >
        Load More News
    </Button>

</div>
    <Modal
    show={showDigest}
    onHide={() =>
        setShowDigest(false)
    }
    size="lg"
>

    <Modal.Header closeButton>

        <Modal.Title>

            📰 Today's AI Digest

        </Modal.Title>

    </Modal.Header>

    <Modal.Body>

        <pre
            style={{
                whiteSpace: "pre-wrap"
            }}
        >
           <ReactMarkdown>
    {digest}
</ReactMarkdown>
        </pre>

    </Modal.Body>

</Modal>

</Row>




)}
    
    </Container>
    
    
  );
}

export default NewsList;