# GitLet - Version Control System

## Overview
GitLet is a full-featured version control system built from scratch in Java, implementing Git's core functionality including commits, branches, merging, and distributed file tracking. This project demonstrates deep understanding of data structures, algorithms, and software engineering principles.

## Key Features
- **Complete Version Control Implementation**: Full commit history tracking with SHA-1 hashing
- **Branch and Merge Functionality**: Create, switch, and merge branches with conflict resolution
- **File Tracking and History**: Track changes across multiple files with diff capabilities
- **Command-Line Interface**: Unix-style CLI with familiar Git commands
- **Distributed Architecture**: Local repository management with remote synchronization support

## Core Architecture

### Data Structures
- **Commit Objects**: Immutable snapshots of repository state
- **Blob Storage**: Efficient file content storage with SHA-1 identification
- **Tree Structures**: Directory organization and file hierarchy management
- **Staging Area**: Intermediate state for preparing commits

### Key Algorithms
- **SHA-1 Hashing**: Content-addressable storage for data integrity
- **Three-Way Merge**: Intelligent merging with common ancestor detection
- **Diff Algorithms**: Line-by-line change detection and visualization
- **Graph Traversal**: Commit history navigation and branch analysis

## Technologies Used
- **Java**: Core programming language with object-oriented design
- **Data Structures**: Custom implementations of trees, graphs, and hash maps
- **File I/O**: Efficient file system operations and serialization
- **Algorithms**: Graph algorithms, string processing, and cryptographic hashing

## Supported Commands

### Repository Management
```bash
java gitlet.Main init                    # Initialize new repository
java gitlet.Main add [file]              # Stage files for commit
java gitlet.Main commit [message]        # Create new commit
java gitlet.Main log                     # Show commit history
java gitlet.Main status                  # Show repository status
```

### Branch Operations
```bash
java gitlet.Main branch [name]           # Create new branch
java gitlet.Main checkout [branch]       # Switch to branch
java gitlet.Main merge [branch]          # Merge branches
java gitlet.Main rm-branch [name]        # Remove branch
```

### File Operations
```bash
java gitlet.Main rm [file]               # Remove file from tracking
java gitlet.Main checkout -- [file]      # Restore file from HEAD
java gitlet.Main checkout [commit] [file] # Restore from specific commit
```

## Implementation Highlights

### Object Model
- **Commit Objects**: Store metadata, parent references, and tree snapshots
- **Blob Objects**: Immutable file content storage with compression
- **Tree Objects**: Directory structure representation
- **Reference System**: Branch and tag management

### Performance Optimizations
- **Content Deduplication**: Identical files stored once using SHA-1
- **Lazy Loading**: Objects loaded on-demand to minimize memory usage
- **Efficient Diff**: Quick change detection using hash comparison
- **Compressed Storage**: Space-efficient object serialization

### Error Handling
- **Input Validation**: Comprehensive command argument checking
- **State Verification**: Repository consistency checks
- **Merge Conflicts**: Intelligent conflict detection and resolution
- **Rollback Support**: Safe operation with rollback capabilities

## Project Structure
```
GitLet_Project/
├── gitlet/
│   ├── Main.java              # Command-line interface
│   ├── Commit.java            # Commit object implementation
│   ├── Blob.java              # File content storage
│   ├── Tree.java              # Directory structure
│   ├── Branch.java            # Branch management
│   ├── StagingObj.java        # Staging area implementation
│   ├── Utils.java             # Utility functions
│   └── GitletException.java   # Custom exceptions
├── testing/                   # Comprehensive test suite
└── README.md                  # Project documentation
```

## Advanced Features

### Merge Algorithm
- **Three-Way Merge**: Uses common ancestor for intelligent merging
- **Conflict Detection**: Identifies and marks conflicting changes
- **Fast-Forward**: Optimized merging for linear history
- **Merge Commits**: Special commits with multiple parents

### Repository Integrity
- **Content Verification**: SHA-1 checksums ensure data integrity
- **Referential Integrity**: Maintains consistent object references
- **Atomic Operations**: All-or-nothing command execution
- **Backup Recovery**: Repository state recovery mechanisms

## Testing and Validation
- **Unit Tests**: Comprehensive test coverage for all components
- **Integration Tests**: Full workflow testing with sample repositories
- **Edge Case Testing**: Boundary conditions and error scenarios
- **Performance Testing**: Scalability with large repositories

## Learning Outcomes
This project demonstrates proficiency in:
- **Algorithm Design**: Complex algorithms for version control operations
- **Data Structure Implementation**: Custom data structures for efficient storage
- **Object-Oriented Design**: Clean architecture with proper encapsulation
- **File System Programming**: Low-level file operations and serialization
- **Software Engineering**: Large-scale project organization and testing

## Author
**Wajahat Khan**
- Email: wajamail99@gmail.com
- GitHub: [WajaHUB](https://github.com/WajaHUB)
- LinkedIn: [Wajahat Khan](https://linkedin.com/in/wajahat-khan)

## Academic Context
This project was developed as part of advanced computer science coursework, demonstrating mastery of core CS concepts including data structures, algorithms, and software engineering principles. It represents a significant undertaking in systems programming and version control system design.