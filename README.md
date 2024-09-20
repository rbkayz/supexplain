## SupExplain

SupExplain is an AI Postgres Explain Visualizer. It uses the PEV library to visualize the query plan of your queries

The tool also uses GPT-4o to analyze your query plan and suggest recommendations

Use this tool to identify inefficiencies in your queries and improve performance

[[](https://www.veed.io/view/bd7bdfd8-fd74-4a27-aec7-c3a76fbae78e?panel=share)](https://www.veed.io/view/bd7bdfd8-fd74-4a27-aec7-c3a76fbae78e?panel=share)


## How to use

1. Open the SQL editor of your supabase project
2. Append the following statement to the start of the query and run it

```sql
EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON)
```

3. Copy the output and paste it into the query plan text area
4. Click the `Analyze Query Plan` button

5. If you have enabled AI analysis, the tool will use GPT-4o to analyze the query plan and suggest recommendations. IMP: To enable AI analysis in your local environment, you need to add your `OPENAI_API_KEY` to the `.env` file


## Postgres Explain Visualizer

The tool uses the PEV library to visualize the query plan. You can learn more about the PEV library [here](https://github.com/dalibo/pev2).


## Credits

This tool was built for a Supabase Hackathon. This is not affiliated or endorsed by Supabase

Thank you to the following tools / projects that made this tool possible:

- [PEV](https://github.com/dalibo/pev2)
- [Supabase](https://supabase.com)
- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
- [OpenAI](https://openai.com)
- [GPT-4o](https://platform.openai.com/docs/models/gpt-4o)
