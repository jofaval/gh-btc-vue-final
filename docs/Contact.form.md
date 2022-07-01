# Contact #

The contact formulary of the webapp

## Contents

1. [Purpose](#purpose)
1. [Fields](#fields)
    1. [Full name](#full-name)
    1. [Email](#email)
    1. [Subject](#subject)
    1. [Message](#message)
1. [Validation](#)
    1. [Full name](#full-name-1)
        1. [Some examples](#some-examples)
    1. [Email](#email-1)
        1. [Examples](#examples)
    1. [Subject](#subject-1)
    1. [Message](#message-1)

## Purpose

It's purpose is to notify or to get in touch with the developers/support of the application.

## Fields

### Full name

I feel that full name is more user-friendly than name, surname and last name since it gives the user more freedom, plus it's compacting three inputs into one

### Email

In case we want to stay in touch with the user, it could be optional, allowing for anonimous contact, but it wouldn't make much sense for this application's purpose.

### Subject

It can help sintetize the idea and it can be great as a summarization of the message

### Message

The actual reason they're filling out this form in the first place.

## Validation

### Full name

We should only check for one character or more, just to make sure it's not empty, checking for more characters may add western bias to our webapp, which is not what we want.

#### Some examples

```
Li -> would be valid
```

```
J -> would be valid
```

```
"" -> would not be valid
```

```
_[empty]_ -> would not be valid
```

```
1 -> would not be valid
```

```
James the 1º -> would be valid
```

### Email

The classic dilema, email validation, it should be an email, up to whatever may be wanted for the complexity. But it should at least identify clearly non-valid emails

#### Examples

```
ceo@google.com -> would be valid
```

```
un@otan.gov.org -> would be valid
```

```
not@email -> would not be valid
```

...and so on.

### Subject

Just checking for text, if there's text, no matter it's content (not looking up for bad words, SQL injections), that'd be valid enough

### Message

Same than with the `subject` field, if the field is not empty, it'd be a valid field.