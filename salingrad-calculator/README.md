# Known bugs

## Assignment

Minutes - boundaries not clear (included or excluded)
Price - adult or child price? not clear (child ticket prices missing)

## UI

Input field has different height than button
Checkbox part not styled
"cena" displayed by default (may be confusing)
CZK vs Kč

## Inputs

### Both adult and child ticket

Empty input - 99999999999999 Kč
String input (characters, negative values...) - 1 CZK
0 - should be allowed?
Special characters allowed (minor)
Cannot be controlled by keyboard (minor)

### Adult

60 - 33 CZK, should be 25
more than 1440 - 1 CZK

### Child

less than or equal 15 - undefined
1440 - should be 45
more than or equal 1339 - 1 CZK
