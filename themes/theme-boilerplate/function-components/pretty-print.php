<?php

// ---> Pretty Print (krajšie vypísanie print_r)
function prettyPrint($a, $t='pre') {echo "<$t>".print_r($a,1)."</$t>";}