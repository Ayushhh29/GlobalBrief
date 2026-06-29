# import ollama

# def generate_context(title, description):

#     prompt = f"""
#     You are a news analyst.

#     Headline:
#     {title}

#     Description:
#     {description}

#     Explain:
#     1. Why this news matters
#     2. Important background context
#     3. Possible future impact

#     Keep the answer under 5 bullet points.
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


def generate_context(title, description):

    prompt = f"""
You are a news analyst.

Headline:
{title}

Description:
{description}

Explain:
1. Why this news matters.
2. Important background context.
3. Possible future impact.

Keep the answer under 5 bullet points.
"""

    return generate_text(prompt)