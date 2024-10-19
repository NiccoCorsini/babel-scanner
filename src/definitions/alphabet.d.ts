export type AlphabetCodes =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 30
  | 31
  | 32
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70;

export type AlphabetLecters =
  | "a"
  | "A"
  | "b"
  | "B"
  | "c"
  | "C"
  | "d"
  | "D"
  | "e"
  | "E"
  | "f"
  | "F"
  | "g"
  | "G"
  | "h"
  | "H"
  | "i"
  | "I"
  | "j"
  | "J"
  | "k"
  | "K"
  | "l"
  | "L"
  | "m"
  | "M"
  | "n"
  | "N"
  | "o"
  | "O"
  | "p"
  | "P"
  | "q"
  | "Q"
  | "r"
  | "R"
  | "s"
  | "S"
  | "t"
  | "T"
  | "u"
  | "U"
  | "v"
  | "V"
  | "w"
  | "W"
  | "x"
  | "X"
  | "y"
  | "Y"
  | "z"
  | "Z"
  | "ä"
  | "Ä"
  | "ö"
  | "Ö"
  | "ü"
  | "Ü";

export type AlphabetRead = Map<AlphabetCodes, AlphabetLecters>;

export type AlphabetWrite = Map<AlphabetLecters, AlphabetCodes>;
