# import ollama

# def generate_future_impact(title, description):

#     prompt = f"""
# News Title:
# {title}

# News Description:
# {description}

# Predict 4 possible future impacts of this news.

# Rules:
# - Use markdown bullet points
# - Keep each point to 1-2 lines
# - No introduction paragraph
# - Start directly with bullets

# Example:

# - Impact 1
# - Impact 2
# - Impact 3
# - Impact 4
# """

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


def generate_future_impact(title, description):

    prompt = f"""
You are a future trends analyst.

News Title:
{title}

News Description:
{description}

Predict 4 possible future impacts of this news.

Requirements:
- Give exactly 4 bullet points.
- Keep each point to 1-2 lines.
- Focus on realistic outcomes.
- Mention possible impacts on people, businesses, governments, or the economy where relevant.
- Do not write an introduction or conclusion.
- Start directly with bullet points.

Example:

- Impact 1
- Impact 2
- Impact 3
- Impact 4
"""

    return generate_text(prompt)