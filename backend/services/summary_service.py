from services.gemini_service import generate_text


def generate_summary(text):

    prompt = f"""
You are an expert news summarizer.

Summarize the following news article in 3-5 concise bullet points.
Focus only on the key facts.
Do not add information that is not present.

Article:
{text}
"""

    return generate_text(prompt)