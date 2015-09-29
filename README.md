# handlebars-render

A command-line handlebars client. Takes data from `stdin` and a template from `-i` and produces html.

## Install

```shell
npm install handlebars-render -g
```

## Usage

`hb` is a command that accepts data from stdin. For example you could do:

```shell
echo '{"foo": "bar"}' | hb -i page.handlebars
```

Where **page.handlebars** looks like:

```handlebars
<html>
<head></head>
<body>
  <h1>{{foo}}</h1>
</body>
</html>
```

which would produce:

```html
<html>
<head></head>
<body>
  <h1>{{foo}}</h1>
</body>
</html>
```

## License

MIT
