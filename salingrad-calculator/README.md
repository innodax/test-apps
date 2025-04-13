# Known bugs

## Assignment

<p>Minutes - boundaries not clear (included or excluded)</p>
<p>Price - adult or child price? not clear (child ticket prices missing)</p>

## UI

<p>Input field has different height than button</p>
<p>Checkbox part not styled</p>
<p>"cena" displayed by default (may be confusing)</p>
<p>CZK vs Kč</p>
<p>Favicon missing (minor)</p>
<p>Title missing (minor)</p>

## Inputs

### Both adult and child ticket

<p>Empty input - 99999999999999 Kč</p>
<p>String input (characters, negative values...) - 1 CZK</p>
<p>0 - should be allowed?</p>
<p>Special characters allowed (minor)</p>
<p>Cannot be controlled by keyboard (minor)</p>

### Adult

<p>60 - 33 CZK, should be 25</p>
<p>more than 1440 - 1 CZK</p>

### Child

<p>less than or equal 15 - undefined</p>
<p>1440 - should be 45</p>
<p>more than or equal 1339 - 1 CZK</p>
