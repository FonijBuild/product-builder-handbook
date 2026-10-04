---
title: AI App
description: Build Your Own AI App
---

Build your own AI application from idea to production.

<!-- ## Definitions

- AI engineering: the process of building applications on top of readily available models (foundation models)
- A language model encodes statistical information about one/more languages. Intuitively, this information tells us how likely a word is to appear in a given context.
- Token: basic unit of a language model, can be a character/word/part of a word (like -tion), depending on the model.
- Tokenization: process of breaking the original text into tokens
- Model’s vocabulary: set of all tokens a model can work with
- The tokenization method and vocabulary size are decided by model developers.
- Masked language model:

  trained to predict missing tokens anywhere in a sequence, using the context from both before and after the missing tokens (trained to be able to fill in the blank)

  For example, given the context, “My favorite \*\* is blue”, a masked language model
  should predict that the blank is likely “color”.

  A well-known example of a masked language model is bidirectional encoder representations from transformers, or BERT.

  commonly used for non-generative tasks such as sentiment analysis and text classification. They are also useful for tasks requiring an understanding of the overall context, such as code debugging, where a model needs to understand both the preceding and following code to identify errors.

- Autoregressive language model:

  trained to predict the next token in a sequence, using only the preceding tokens.

  It predicts what comes next in “My favorite color is \*\*.”

  An autoregressive model can continually generate one token after another.

![Autoregressive language model and masked language model](../../../assets/llm/masked_vs_autoregressive_lm.png "Autoregressive language model and masked language model")

- The outputs of language models are open-ended. A language model can use its fixed, finite vocabulary to construct infinite possible outputs.
- Generative model: generate open-ended outputs
- Many tasks, including translation, summarization, coding, and solving math problems, can be framed as completion tasks.
- ML algorithms: Language Models, models for object detection, topic modeling, recommender systems, weather forecasting, stock price prediction, ...
- Supervision: process of training ML algorithms using labeled data, which can be expensive and slow to obtain
- Parameter: a variable within an ML model that is updated through the training process
- Self-supervision helps overcome this data labeling bottleneck to create larger datasets for models to learn from, effectively allowing models to scale up.
- In self-supervision, instead of requiring explicit labels, the model can infer labels from the input data. Language modeling is self-supervised because each input sequence provides both the labels (tokens to be predicted) and the contexts the model can use to predict these labels.
- In self-supervised learning, labels are inferred from the input data. In unsupervised
  learning, you don’t need labels at all. Self-supervised learning means that language models can learn from text sequences without requiring any labeling.
- foundation model -> handles different modalities and wide range of tasks not just text but also voice, image, 3D, video, ...
- For a long time, AI research was divided by data modalities. Natural language processing (NLP) deals only with text. Computer vision deals only with vision.
- Text-only models can be used for tasks such as translation and spam detection.
- Image-only models can be used for object detection and image classification.
- Audio-only models can handle speech recognition (speech-to-text, or STT) and speech synthesis (text-to-speech, or TTS).
- A model that can work with more than one data modality is also called a multimodal model. A generative multimodal model is also called a large multimodal model (LMM).
- If a language model generates the next token conditioned on text-only tokens, a multimodal model generates the next token conditioned on both text and image tokens, or whichever modalities that the model supports. Self-supervision works for multimodal models too.

![Multimodal model](../../../assets/llm/multimodal-model.png "Multimodal model")

## AI Engineering Techniques

- Prompt Engineering
- RAG (Retrieval Augmented Generation) -> using a DB to supplement the instructions
- Finetuning -> further train the model on a dataset of high-quality data

## Foundation Model Use Cases

- The enterprise world generally prefers applications with lower risks. companies are faster to deploy internal-facing
  applications (internal knowledge management) than external-facing applications
  (customer support chatbots).
- Internal applications help companies develop their AI engineering expertise while minimizing the risks associated with data privacy, compliance, and potential catastrophic failures.

### The role of AI and humans in the application

- Critical or complementary

If an app can still work without AI, AI is complementary to the app. For exam‐
ple, Face ID wouldn’t work without AI-powered facial recognition, whereas
Gmail would still work without Smart Compose.
The more critical AI is to the application, the more accurate and reliable the AI
part has to be. People are more accepting of mistakes when AI isn’t core to the
application.

- Reactive or proactive

A reactive feature shows its responses in reaction to users’ requests or specific
actions, whereas a proactive feature shows its responses when there’s an opportu‐
nity for it. For example, a chatbot is reactive, whereas traffic alerts on Google
Maps are proactive.
Because reactive features are generated in response to events, they usually, but
not always, need to happen fast. On the other hand, proactive features can be
precomputed and shown opportunistically, so latency is less important.
Because users don’t ask for proactive features, they can view them as intrusive or
annoying if the quality is low. Therefore, proactive predictions and generations
typically have a higher quality bar.

- Dynamic or static

Dynamic features are updated continually with user feedback, whereas static fea‐
tures are updated periodically. For example, Face ID needs to be updated as peo‐
ple’s faces change over time. However, object detection in Google Photos is likely
updated only when Google Photos is upgraded.
In the case of AI, dynamic features might mean that each user has their own
model, continually finetuned on their data, or other mechanisms for personaliza‐
tion such as ChatGPT’s memory feature, which allows ChatGPT to remember
each user’s preferences. However, static features might have one model for a
group of users. If that’s the case, these features are updated only when the shared
model is updated.

\*\* Involving humans in AI’s decision-making processes is called human-in-the-loop.

## AI product defensibility (competitive advantages - moat)

- Technology: With foundation models, the core technologies of most companies will be similar.
- Data: Big companies likely have more existing data. However, if a startup can get to market first and gather sufficient usage data to continually improve their products, data will be their moat. Even for the scenarios where user data can’t be used to train models directly, usage information can give invaluable insights into user behaviors and product shortcomings, which can be used to guide the data collection and training process.
- Distribution: The distribution advantage likely belongs to big companies.
- To ensure a product isn’t put in front of customers before it’s ready, have clear expectations on its usefulness threshold: how good it has to be for it to be useful. Usefulness thresholds might include the following metrics groups:
  - Quality metrics to measure the quality of the chatbot’s responses.
  - Latency metrics including TTFT (time to first token), TPOT (time per output token), and total latency. What is considered acceptable latency depends on your use case. If all of your customer requests are currently being processed by humans with a median response time of an hour, anything faster than this might be good enough.
  - Cost metrics: how much it costs per inference request.
  - Other metrics such as interpretability and fairness.

- Planning an AI product needs to account for its last mile challenge. Initial success
  with foundation models can be misleading. As the base capabilities of foundation models are already quite impressive, it might not take much time to build a fun demo. However, a good initial demo doesn’t promise a good end product. It might take a weekend to build a demo but months, and even years, to build a product.

## Three Layers of the AI Stack

- Application development

With models readily available, anyone can use them to develop applications. This
is the layer that has seen the most action in the last two years, and it is still rapidly evolving. Application development involves providing a model with good prompts and necessary context. This layer requires rigorous evaluation. Good applications also demand good interfaces.

- Model development

This layer provides tooling for developing models, including frameworks for modeling, training, finetuning, and inference optimization. Because data is central to model development, this layer also contains dataset engineering. Model development also requires rigorous evaluation.

- Infrastructure

At the bottom is the stack is infrastructure, which includes tooling for model serving, managing data and compute, and monitoring.

![Three layers of the AI engineering stack](../../../assets/llm/layers-of-ai-engineering-stack.png "Three layers of the AI engineering stack")

## AI Engineering Versus ML Engineering

| AI Engineer                                | ML Engineer                      |
| ------------------------------------------ | -------------------------------- |
| Leverages existing model                   | Develops ML models               |
| Focuses on model adaptation and evaluation | Focuses on modeling and training |

- All these terms are used for building apps on top of foundation models -> ML engineer, MLOps, AIOps, LLMOps, AI engineer, ...

## Model Adaptation

- Prompt-based techniques, which include prompt engineering, adapt a model without
  updating the model weights. You adapt a model by giving it instructions and context
  instead of changing the model itself. Prompt engineering is easier to get started and
  requires less data. Many successful applications have been built with just prompt
  engineering. Its ease of use allows you to experiment with more models, which
  increases your chance of finding a model that is unexpectedly good for your applications. However, prompt engineering might not be enough for complex tasks or applications with strict performance requirements.
- Finetuning, on the other hand, requires updating model weights. You adapt a model by
  making changes to the model itself. In general, finetuning techniques are more complicated and require more data, but they can improve your model’s quality, latency, and cost significantly. Many things aren’t possible without changing model weights, such as adapting the model to a new task it wasn’t exposed to during training.

## Model Development

1. Modeling and Training: the process of coming up with a model architecture, training it, and finetuning it.

Tools like TensorFlow, Transformers and PyTorch.

You must have ML knowledge: - ML algorithms uch as clustering, logistic regression, decision trees, and collaborative filtering - Neural network architecture such as feedforward, recurrent, convolutional, and transforme - concepts such as gradient descent, loss function, regularization, etc

## On the Differences Among Training, Pre-Training, Finetuning, and Post-Training

- Training always involves changing model weights, but not all changes to model
  weights constitute training. For example, quantization, the process of reducing the
  precision of model weights, technically changes the model’s weight values but isn’t
  considered training.
- Training phases:

### Pre-training

- training a model from scratch—the model weights are randomly initialized, resource-intensive

### Finetuning

- continuing to train a previously trained model—the model weights are obtained from the previous training process

### Post-training

- Conceptually, post-training and finetuning are the same and can be used interchangeably.
- It’s usually post-training when it’s done by
  model developers.
- It’s finetuning when it’s done by application developers

## Dataset engineering

- curating, generating, and annotating the data needed for training and adapting AI models.
- Training a model from scratch generally requires more data than finetuning, which, in turn, requires more data than prompt engineering.

## Inference optimization

- making models faster and cheaper

## Application Development

### Evaluation

- Evaluation is about mitigating risks and uncovering opportunities.
- Evaluation is needed to select models, to benchmark progress, to determine whether an application is ready for deployment, and to detect issues and opportunities for improvement in production.

### Prompt engineering & context construction

- Prompt engineering is about getting AI
  models to express the desirable behaviors from the input alone, without changing the
  model weights.

### AI interface

- AI interface means creating an interface for end users to interact with your AI applications.

** ML Engineering: Data -> Model -> Product
** AI Engineering: Product -> Data -> Model

## Training Data

- Since models learn from data, their training data reveals a great deal about their capabilities and limitations.
- Model’s training process:
  1. Pre-training: makes a model capable, but not necessarily safe or easy to use.
  2. Post-training: aligns the model with human preferences

- **Sampling** is how a model chooses an output from all possible options.
  Not only does sampling explain many seemingly baffling AI behaviors, including hallucinations and inconsistencies, but choosing the right sampling strategy can also significantly boost a model’s performance with relatively little effort.

\*\* An AI model is only as good as the data it was trained on.

- The “use what we have, not what we want” approach may lead to models that per‐
  form well on tasks present in the training data but not necessarily on the tasks you
  care about. To address this issue, it’s crucial to curate datasets that align with your
  specific needs
- While language- and domain-specific foundation models can be trained from
  scratch, it’s also common to finetune them on top of general-purpose models.

### Multilingual Models

- Other than quality issues, models can also be slower and more expensive for non-
  English languages. A model’s inference latency and cost is proportional to the num‐
  ber of tokens in the input and response. It turns out that tokenization can be much
  more efficient for some languages than others.

\*\* For APIs that charge by token usage, Burmese costs ten times more than
English.

### Domain-Specific Models

- General-purpose models like Gemini, GPTs, and Llamas can perform incredibly well
  on a wide range of domains, including but not limited to coding, law, science, busi‐
  ness, sports, and environmental science. This is largely thanks to the inclusion of
  these domains in their training data.

## Modeling

- Before training a model -> decide on how many parameters and what architecture the model should have?

### Model Architecture

- dominant architecture for language-based foundation models -> transformer architecture -> based on attention mechanism
- before transformer -> seq2seq (sequence-to-sequence) architecture -> significant improvement on translation and summarization -> contains an encoder that processes inputs and a decoder that generates outputs -> the encoder processes the input tokens sequentially, outputting the final hidden state that represents the input. The decoder then generates output tokens sequentially, conditioned on both the final hidden state of the input and the previously generated token -> uses RNNs (recurrent neural networks) as its encoder and decoder

![Seq2seq architecture versus transformer architecture](../../../assets/llm/seq2seq-vs-transformer.png "Seq2seq architecture versus transformer architecture")

- Seq2seq problems:
  - vanilla seq2seq decoder generates output tokens using only the final hidden state of
    the input -> like generating answers about a book using the book summary -> limited quality
  - the RNN encoder and decoder mean that both input processing and output generation are done sequentially, making it slow for long sequence

- Transfomer solve seq2seq broblems by using attention mechanism with no RNN, transformer-based language models steps:
  - Prefill: model processes input tokens in parallel -> creates the intermediate state necessary to generate the first output token -> intermediate state includes the key and value vectors for all input tokens.
  - Decode: model generates one output token at a time.

#### Attention mechanism -> everages key, value, and query vectors

- query vector (Q) -> the current state of the decoder at each decoding step -> this query vector can be thought of as the person looking for information to create a summary
- Each key vector (K) -> a previous token -> If each previous token is a page
  in the book, each key vector is like the page number. Note that at a given decoding step, previous tokens include both input tokens and previously generated tokens
- Each value vector (V) -> the actual value of a previous token, as learned by the model -> Each value vector is like the page’s content -->
