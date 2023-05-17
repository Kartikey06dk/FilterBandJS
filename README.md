# FilterBandJS

Filter Band
You are working on a project for a local music festival. The festival has a list of bands and their corresponding genres, stored in an array of objects. Your task is to create a function that takes in an array of bands and a genre, and returns an array of the bands that belong to that genre.

Input Format
An array of objects, arr, where each object has the following properties:

name (string): the name of the band genre (string): the genre of the band A string, genre, representing the genre to filter by.

Output Format
An array containing only the name of bands in arr that belong to the specified genre.

Example 1
Input

[{"name": "Band 1", "genre":"Rock"},{ "name":"Band 2", "genre":"Pop"},{ "name":"Band 3", "genre":"Rock"}]
Rock

Output

Band 1
Band 3
Explanation

Testcase1: genre of Band1 and Band 3 is rock.

Constraints:

1 <= N <= 100000

