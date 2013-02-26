group-select-checks
======================

### Select / deselect a range of checkboxes - jQuery Plugin.

A lot of applications (email apps spring to mind) allow you to select a checkbox then whilst holding down a
key and selecting another checkbox you will select all between the two and including the two you selected.

This simple plugin enables that feature for your online app.

By default the plugin uses the shift key pressed for group selection but you can pass the keycode for the key 
you prefer, Just pass the code to the config like so:

```
$('ul').groupSelectChecks({keyCode:18});
```

##### You do not have to follow a specific mark-up structure, it has another config option which enables this flexibility.

If you have your checkboxes marked up in a unordered list say, you just need to pass the parent sibling element that
provides the index. In this case it would be the li, so in the config all you would need to do is:

```
$('ul').groupSelectChecks({keyCode:18, siblingGroup:'li'});
```

You can remove this config option and just wrap a bunch of checkboxes in a container (div or span) to make life a little more
simple if you wish, the demo.html should show all this more clearly.

Finally there is a class that is used internally in the code. This by default is set as 'selected', if for any reason this
conflicts with your code you can easily change this with the other config option, classHelper:
```
$('ul').groupSelectChecks({keyCode:18, siblingGroup:'li', classHelper:'yourclass'});
```



