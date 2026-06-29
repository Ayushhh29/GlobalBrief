# import ollama

# def generate_digest(articles):

#     news_text = ""

#     for article in articles:

#         news_text += f"""
# Title: {article['title']}
# Description: {article['description']}
# """

#     prompt = f"""
#     Here are today's news articles:

#     {news_text}

#     Create a concise daily news digest.

#     Organize by major themes and provide
#     key takeaways at the end.
#     """

#     response = ollama.chat(
#         model="llama3.2:3b",
#         messages=[
#             {
#                 "role": "user",
#                 "content": prompt
#             }
#         ]
#     )

#     return response["message"]["content"]




from services.gemini_service import generate_text


def generate_digest(articles):

    news_text = ""

    for article in articles:

        news_text += f"""
Title: {article['title']}
Description: {article['description']}

"""

    prompt = f"""
You are an AI news editor.

Below are today's news articles:

{news_text}

Create a professional daily news digest.

Requirements:
- Organize similar news into categories.
- Use Markdown headings (##).
- Summarize each category in 2-4 bullet points.
- Keep the digest around 250-350 words.
- End with a section called **Key Takeaways** containing 3-5 bullet points.
- Do not repeat the same information.
"""

    return generate_text(prompt)