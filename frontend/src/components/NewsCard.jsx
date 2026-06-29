import API from "../services/api";
import { useState } from "react";
import {
    Card,
    Button,
    Spinner,
     Accordion
} from "react-bootstrap";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";


function NewsCard({ article }) {

     console.log(article);

    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const [context, setContext] = useState("");
    const [contextLoading, setContextLoading] = useState(false);

    const [history, setHistory] = useState("");
const [historyLoading, setHistoryLoading] = useState(false);

const [futureImpact, setFutureImpact] = useState("");
const [futureLoading, setFutureLoading] = useState(false);

const [timeline, setTimeline] = useState("");
const [timelineLoading, setTimelineLoading] = useState(false);

    const saveBookmark = async () => {

    try {

        await API.post(
            "/bookmarks",
            {
                title: article.title,
                source: article.source,
                url: article.url,
                user_email: localStorage.getItem("user_email")
            }
        );

        toast.success("Bookmark Saved");

    }

    catch(error) {

        console.log(error);

    }
};

const summarizeArticle = async () => {

    try {

        setLoading(true);

        const response = await API.post(
            "/summary",
            {
                text:
                    article.description ||
                    article.title
            }
        );

        setSummary(
            response.data.summary
        );

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }
};

const generateContext = async () => {

    try {

        setContextLoading(true);

        const response = await API.post(
            "/context",
            {
                title: article.title,
                description:
                    article.description || ""
            }
        );

        setContext(
            response.data.context
        );

    } catch (error) {

        console.log(error);

    } finally {

        setContextLoading(false);

    }
};

const generateHistory = async () => {

    try {

        setHistoryLoading(true);

        const response = await API.post(
            "/history",
            {
                title: article.title,
                description:
                    article.description || ""
            }
        );

        setHistory(
            response.data.history
        );

    } catch (error) {

        console.log(error);

    } finally {

        setHistoryLoading(false);

    }
};

const generateFutureImpact = async () => {

    try {

        setFutureLoading(true);

        const response = await API.post(
            "/future-impact",
            {
                title: article.title,
                description:
                    article.description || ""
            }
        );

        setFutureImpact(
            response.data.futureImpact
        );

    } catch (error) {

        console.log(error);

    } finally {

        setFutureLoading(false);

    }
};

const generateTimeline = async () => {

    try {

        setTimelineLoading(true);

        const response = await API.post(
            "/timeline",
            {
                title: article.title,
                description:
                    article.description || ""
            }
        );

        setTimeline(
            response.data.timeline
        );

    } catch (error) {

        console.log(error);

    } finally {

        setTimelineLoading(false);

    }
};

    return (

        <Card className="shadow-sm h-100  news-card">
            {article.image && (
    <Card.Img
        variant="top"
        src={article.image}
        alt={article.title}
        style={{
            height: "220px",
            objectFit: "cover"
        }}
    />
)}
            <Card.Body>

    <Card.Title>
        {article.title}
    </Card.Title>

    <Card.Text>
        {article.description}
    </Card.Text>

    <p>
        <strong>
           Source: {article.source}
        </strong>
        <p>
           <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
    >
        Read Full Article →
    </a>
    </p>
    </p>

     


           
<Button
    variant="warning"
    onClick={saveBookmark}
    className="me-2 mb-2"
>
    ⭐ Bookmark
</Button>
<Button
    variant="primary"
    onClick={summarizeArticle}
    disabled={loading}
    className="me-2 mb-2"
>
    📄 Summary
</Button>

<Button
    variant="success"
    onClick={generateContext}
    disabled={contextLoading}
    className="me-2 mb-2"
>
    🧠 Why It Matters
</Button>
<Button
    variant="secondary"
    onClick={generateHistory}
    disabled={historyLoading}
    className="me-2 mb-2"
>
    📜 Historical Context
</Button>

<Button
    variant="info"
    onClick={generateFutureImpact}
    disabled={futureLoading}
    className="me-2 mb-2"
>
    📈 Future Impact
</Button>
<Button
    variant="dark"
    onClick={generateTimeline}
    disabled={timelineLoading}
    className="me-2 mb-2"
>
    🗓 Timeline
</Button>
{timelineLoading && (
    <Spinner
        animation="border"
        size="sm"
        className="ms-2"
    />
)}
{timeline && (

    <Accordion className="mt-2">

        <Accordion.Item eventKey="4">

            <Accordion.Header>
                🗓 Event Timeline
            </Accordion.Header>

           <Accordion.Body>

    <div className="ai-output">
       <ReactMarkdown>{timeline}</ReactMarkdown>
    </div>

</Accordion.Body>

        </Accordion.Item>

    </Accordion>

)}

{futureLoading && (
    <Spinner
        animation="border"
        size="sm"
        className="ms-2"
    />
)}

{futureImpact && (

    <Accordion className="mt-2">

        <Accordion.Item eventKey="3">

            <Accordion.Header>
                📈 Future Impact
            </Accordion.Header>

           <Accordion.Body>

 <div className="ai-output">
    <ReactMarkdown>
        {futureImpact}
    </ReactMarkdown>
</div>

</Accordion.Body>

        </Accordion.Item>

    </Accordion>

)}
{loading && (
    <Spinner
        animation="border"
        size="sm"
        className="ms-2"
    />
)}
{history && (
    <Accordion className="mt-2">
        <Accordion.Item eventKey="2">
            <Accordion.Header>
                📜 Historical Context
            </Accordion.Header>

            <Accordion.Body>

    <div className="ai-output">
       <ReactMarkdown>{history}</ReactMarkdown>
    </div>

</Accordion.Body>
        </Accordion.Item>
    </Accordion>
)}
{contextLoading && (
    <Spinner
        animation="border"
        size="sm"
        className="ms-2"
    />
)}
{context && (
    <Accordion className="mt-2">
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                🧠 Why It Matters
            </Accordion.Header>

            <Accordion.Body>
                 <div className="ai-output">

        <ReactMarkdown>
       {context}
    </ReactMarkdown>
    </div>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
)}
{historyLoading && (
    <Spinner
        animation="border"
        size="sm"
        className="ms-2"
    />
)}
{summary && (
    <Accordion className="mt-3">
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                📄 AI Summary
            </Accordion.Header>

            <Accordion.Body>

    <div className="ai-output">

        <ReactMarkdown>
        {summary}
    </ReactMarkdown>
    </div>

</Accordion.Body>
        </Accordion.Item>
    </Accordion>
)}
</Card.Body>
        </Card>

    );
}

export default NewsCard;