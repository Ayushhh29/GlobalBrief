# import ollama

# def generate_history(title, description):

#     prompt = f"""
#     You are a news historian.

#     Headline:
#     {title}

#     Description:
#     {description}

#     Explain the likely background and past events
#     that may have led to this news.

#     Give:
#     1. Important historical context
#     2. Major events leading up to this
#     3. Why people should know this background

#     Use 4-6 bullet points.
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


def generate_history(title, description):

    prompt = f"""
You are a news historian.

Headline:
{title}

Description:
{description}

Explain the historical background of this news.

Requirements:
- Explain important events that led to this news.
- Mention relevant dates or years if applicable.
- Explain why this background is important.
- Keep the answer concise.
- Use 4-6 bullet points.
"""

    return generate_text(prompt)