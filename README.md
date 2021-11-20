# gpt3testers
A couple of gpt3 testers that run in the terminal.

##How to use##

To run a tester, navigate to it's directory and use the command:

```
TOKEN=YOUR_API_TOKEN_HERE node JSFILENAME_HERE
```

Most parameters can be adjusted by looking at the gpt3.js file, then altering the parameters passed in for each tester module.
Details about each parameter and what they do can be found at the OpenAI GPT3 documentation.

If you want to generate code, simply alter the CODE_TEMPLATE field in codegen-jsx.js to be in the langauge of your choosing. Examples can be anything, but if it's specifically the element type you want to generate I find that it works better.

For more 'creative' examples, set the 4th parameter in the run() function's description variable to a number betweeen 0 and 1 (1 being most random)

Sorry it's a bit messy I made this in like 20 minutes.
