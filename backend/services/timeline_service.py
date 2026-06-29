# import ollama

# def generate_timeline(title, description):

#     prompt = f"""
#     News Title:
#     {title}

#     News Description:
#     {description}

#     Create a short timeline of important events
#     leading up to this news.

#     Format:

#     Year/Event
#     Year/Event
#     Year/Event
#     Today/Event

#     Keep it concise.
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


def generate_timeline(title, description):

    prompt = f"""
You are a news analyst.

News Title:
{title}

News Description:
{description}

Create a timeline of the important events leading up to this news.

Requirements:
- Use chronological order.
- Mention years or approximate dates if known.
- End with the current news event.
- Use 4-6 bullet points.
- If exact dates are unknown, use phrases like "Earlier", "Recently", "Today".

Format Example:

- 2022 – Event
- 2023 – Event
- Earlier this year – Event
- Today – Current news
"""

    return generate_text(prompt)